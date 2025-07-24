import ffmpeg from 'fluent-ffmpeg';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from 'events';
import * as path from 'path';
import * as fs from 'fs';
import { VariantOptions, ProcessingJob } from '../types';

// Set FFmpeg paths
ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');
ffmpeg.setFfprobePath('/usr/bin/ffprobe');

export class VariantProcessor extends EventEmitter {
  private jobs: Map<string, ProcessingJob> = new Map();

  async processVideo(
    inputPath: string,
    options: VariantOptions
  ): Promise<ProcessingJob> {
    const jobId = uuidv4();
    const inputBaseName = path.basename(inputPath, path.extname(inputPath));
    const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');
    const outputFilename = `variant_${Date.now()}_${sanitizedBaseName}.mp4`;
    const outputPath = path.resolve(process.cwd(), 'outputs', outputFilename);

    const job: ProcessingJob = {
      id: jobId,
      status: 'processing',
      progress: 0,
      inputVideo: inputPath,
      outputVideo: outputPath,
      options,
      createdAt: new Date(),
    };

    this.jobs.set(jobId, job);
    this.emit('jobStarted', job);

    try {
      await this.processVideoInternal(inputPath, outputPath, options, job);
      
      job.status = 'completed';
      job.completedAt = new Date();
      job.progress = 100;
      
      this.emit('jobCompleted', job);
    } catch (error) {
      job.status = 'failed';
      job.error = error instanceof Error ? error.message : 'Unknown error';
      job.completedAt = new Date();
      
      this.emit('jobFailed', job);
    }

    return job;
  }

  async createVariantJob(
    inputPath: string,
    outputPath: string,
    options?: VariantOptions
  ): Promise<string> {
    const jobId = uuidv4();
    const finalOptions = options || {};

    const job: ProcessingJob = {
      id: jobId,
      status: 'processing',
      progress: 0,
      inputVideo: inputPath,
      outputVideo: outputPath,
      options: finalOptions,
      createdAt: new Date(),
    };

    this.jobs.set(jobId, job);
    this.emit('jobStarted', job);

    // Process asynchronously
    this.processVideoInternal(inputPath, outputPath, finalOptions, job)
      .then(() => {
        job.status = 'completed';
        job.completedAt = new Date();
        job.progress = 100;
        this.emit('jobCompleted', job);
      })
      .catch((error) => {
        job.status = 'failed';
        job.error = error instanceof Error ? error.message : 'Unknown error';
        job.completedAt = new Date();
        this.emit('jobFailed', job);
      });

    return jobId;
  }

  private async processVideoInternal(
    inputPath: string,
    outputPath: string,
    options: VariantOptions,
    job: ProcessingJob
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log(`Starting video processing for job ${job.id}`);
      console.log(`Input: ${inputPath}`);
      console.log(`Output: ${outputPath}`);
      console.log(`Options:`, options);

      // Ensure output directory exists
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      let command = ffmpeg(inputPath);

      // 1. Video filters array
      const videoFilters: string[] = [];

      // 2. Zoom/Scale
      if (options.zoom && options.zoom !== 1) {
        const zoom = Math.max(0.5, Math.min(3.0, options.zoom)); // Clamp zoom between 0.5x and 3x
        console.log(`Applying zoom: ${zoom}x`);
        videoFilters.push(`scale=iw*${zoom}:ih*${zoom}`);
        
        // Crop to original size to maintain aspect ratio
        videoFilters.push(`crop=in_w/${zoom}:in_h/${zoom}:(iw-ow)/2:(ih-oh)/2`);
      }

      // 3. Jitter/Padding (simulated shake effect)
      if (options.jitter && options.jitter > 0) {
        const jitter = Math.max(0, Math.min(20, options.jitter)); // Clamp jitter
        const padding = Math.round(jitter * 2);
        console.log(`Applying jitter/padding: ${padding}px`);
        videoFilters.push(`pad=iw+${padding}:ih+${padding}:${Math.round(padding/2)}:${Math.round(padding/2)}:black`);
      }

      // 4. Rotation
      if (options.rotate && options.rotate !== 0) {
        const rotation = options.rotate;
        console.log(`Applying rotation: ${rotation} degrees`);
        videoFilters.push(`rotate=${rotation}*PI/180:fillcolor=black`);
      }

      // 5. Text overlay (using intro/outro text from options)
      if (options.introText || options.outroText) {
        const fontSize = 48;
        const fontColor = 'white';
        
        if (options.introText) {
          console.log(`Adding intro text overlay: "${options.introText}"`);
          // Add intro text (simplified without enable parameter)
          const safeText = options.introText.replace(/['"]/g, '');
          videoFilters.push(`drawtext=text=${safeText}:fontcolor=${fontColor}:fontsize=${fontSize}:x=(w-text_w)/2:y=50`);
        }
        
        if (options.outroText) {
          console.log(`Adding outro text overlay: "${options.outroText}"`);
          // Add outro text (simplified without enable parameter)
          const safeText = options.outroText.replace(/['"]/g, '');
          videoFilters.push(`drawtext=text=${safeText}:fontcolor=yellow:fontsize=${fontSize-6}:x=(w-text_w)/2:y=h-100`);
        }
      }

      // Apply video filters if any
      if (videoFilters.length > 0) {
        console.log(`Applying video filters: ${videoFilters.join(',')}`);
        try {
          command = command.videoFilters(videoFilters.join(','));
        } catch (filterError) {
          console.error('Error applying video filters:', filterError);
          throw new Error(`Invalid video filter: ${filterError instanceof Error ? filterError.message : 'Unknown filter error'}`);
        }
      }

      // 6. Audio processing
      if (options.volumeDb && options.volumeDb !== 0) {
        console.log(`Applying volume adjustment: ${options.volumeDb}dB`);
        try {
          command = command.audioFilters(`volume=${options.volumeDb}dB`);
        } catch (audioError) {
          console.error('Error applying audio filters:', audioError);
          throw new Error(`Invalid audio filter: ${audioError instanceof Error ? audioError.message : 'Unknown audio error'}`);
        }
      }

      // 7. Add metadata
      if (options.metadata) {
        console.log(`Adding metadata:`, options.metadata);
        try {
          Object.entries(options.metadata).forEach(([key, value]) => {
            // Sanitize metadata values and remove spaces to avoid FFmpeg parsing issues
            const sanitizedValue = String(value).replace(/[^\w-_.]/g, '_');
            command = command.outputOptions(['-metadata', `${key}=${sanitizedValue}`]);
          });
        } catch (metadataError) {
          console.error('Error adding metadata:', metadataError);
          // Don't fail the job for metadata errors, just log and continue
        }
      }

      // Progress tracking
      command.on('progress', (progress) => {
        job.progress = Math.round(progress.percent || 0);
        this.emit('jobProgress', job);
      });

      // Error handling
      command.on('error', (err) => {
        console.error(`FFmpeg error for job ${job.id}:`, err);
        reject(err);
      });

      // Success handling
      command.on('end', () => {
        console.log(`Video processing completed for job ${job.id}`);
        resolve();
      });

      // Output configuration
      command
        .videoCodec('libx264')
        .audioCodec('aac')
        .outputOption('-crf', '23')
        .outputOption('-preset', 'medium')
        .outputOption('-movflags', '+faststart')
        .outputOption('-avoid_negative_ts', 'make_zero')
        .outputOption('-y') // Overwrite output file
        .save(outputPath);
    });
  }

  getJob(jobId: string): ProcessingJob | undefined {
    return this.jobs.get(jobId);
  }

  getAllJobs(): ProcessingJob[] {
    return Array.from(this.jobs.values());
  }

  deleteJob(jobId: string): boolean {
    const job = this.jobs.get(jobId);
    if (job) {
      this.jobs.delete(jobId);
      this.emit('jobDeleted', job);
      return true;
    }
    return false;
  }

  // Generate random metadata for fingerprint avoidance
  private generateRandomMetadata(): Record<string, string> {
    const titles = [
      'Test Upload Video', 'Sample Content', 'Demo Video', 
      'Practice Upload', 'Test File'
    ];
    const artists = [
      'Test Creator', 'Sample User', 'Demo Account', 
      'Practice User', 'Test Account'
    ];
    const albums = [
      'Collection_952', 'Sample_Album', 'Demo_Collection',
      'Practice_Set', 'Test_Collection'
    ];
    const comments = [
      'Generated_27522', 'Sample content for testing', 'Demo video file',
      'Practice upload content', 'Test video for processing'
    ];

    const randomIndex = Math.floor(Math.random() * titles.length);
    const randomId = Math.floor(Math.random() * 1000);

    return {
      title: titles[randomIndex],
      artist: artists[randomIndex],
      album: albums[randomIndex],
      date: '2021',
      comment: `${comments[randomIndex]} ${randomId}`,
      genre: 'Entertainment',
      description: `Variant content with randomized metadata ${randomId}`
    };
  }

  async processWithRandomMetadata(
    inputPath: string,
    baseOptions: Partial<VariantOptions> = {}
  ): Promise<ProcessingJob> {
    const options: VariantOptions = {
      zoom: baseOptions.zoom || 1.08,
      jitter: baseOptions.jitter || 1.0,
      rotate: baseOptions.rotate || Math.random() * 2 - 1, // Random rotation between -1 and 1
      volumeDb: baseOptions.volumeDb || 2.5,
      introText: baseOptions.introText || 'Welcome to my content!',
      outroText: baseOptions.outroText || 'Like and subscribe!',
      ...baseOptions,
      metadata: {
        ...this.generateRandomMetadata(),
        ...(baseOptions.metadata || {})
      }
    };

    return this.processVideo(inputPath, options);
  }
}
