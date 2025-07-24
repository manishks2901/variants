import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import { prisma } from '../database';
import { EnhancedVideoProcessor, EnhancedVariantOptions } from '../services/enhancedVideoProcessor';
import { JobStatus, BatchStatus } from '../generated/prisma';

export class EnhancedVariantController {
  // Create a new video processing job that generates 5 variants
  static async createVideoJob(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No video file uploaded' });
      }

      const options: EnhancedVariantOptions = {
        zoom: req.body.zoom ? parseFloat(req.body.zoom) : undefined,
        rotation: req.body.rotation ? parseFloat(req.body.rotation) : undefined,
        jitter: req.body.jitter ? parseFloat(req.body.jitter) : undefined,
        text: req.body.text || undefined,
        fontSize: req.body.fontSize ? parseInt(req.body.fontSize) : undefined,
        fontColor: req.body.fontColor || undefined,
        position: req.body.position || undefined,
        preset: req.body.preset || undefined,
        colorEffects: req.body.colorEffects ? JSON.parse(req.body.colorEffects) : undefined,
        audioEffects: req.body.audioEffects ? JSON.parse(req.body.audioEffects) : undefined,
        introOutro: req.body.introOutro ? JSON.parse(req.body.introOutro) : undefined,
        metadataOptions: req.body.metadataOptions ? JSON.parse(req.body.metadataOptions) : { randomizeMetadata: true },
        speed: req.body.speed ? parseFloat(req.body.speed) : undefined,
      };

      // Create video job in database
      const videoJob = await prisma.videoJob.create({
        data: {
          originalName: req.file.originalname,
          filePath: req.file.path,
          status: JobStatus.PENDING,
          options: options as any, // Cast to any to handle Prisma JSON type
          userId: req.body.userId || null, // Optional user association
        },
      });

      // Start processing asynchronously to generate 5 variants
      EnhancedVariantController.processVideoVariantsAsync(videoJob.id, req.file.path, options);

      res.json({
        jobId: videoJob.id,
        status: 'pending',
        message: 'Video processing job created successfully - generating 5 variants',
        options: options,
        expectedVariants: 5,
      });
    } catch (error) {
      console.error('Error creating video job:', error);
      res.status(500).json({ error: 'Failed to create video job' });
    }
  }

  // Process video to generate 5 variants asynchronously
  private static async processVideoVariantsAsync(jobId: string, inputPath: string, options: EnhancedVariantOptions) {
    try {
      // Update job status to processing
      await prisma.videoJob.update({
        where: { id: jobId },
        data: { 
          status: JobStatus.PROCESSING,
          startedAt: new Date()
        },
      });

      const outputDir = 'outputs';

      // Generate 5 variants with progress tracking
      const outputPaths = await EnhancedVideoProcessor.generateVariants(
        inputPath,
        outputDir,
        options,
        async (variantIndex: number, progress: number, totalProgress: number) => {
          await prisma.videoJob.update({
            where: { id: jobId },
            data: { progress: totalProgress },
          });
        }
      );

      // Update job with completion details
      await prisma.videoJob.update({
        where: { id: jobId },
        data: {
          status: JobStatus.COMPLETED,
          outputPath: outputPaths[0], // Store first variant as primary output
          progress: 100,
          completedAt: new Date(),
        },
      });

      // Create variant records for each generated video
      for (let i = 0; i < outputPaths.length; i++) {
        const outputPath = outputPaths[i];
        
        try {
          const metadata = await EnhancedVideoProcessor.getVideoMetadata(outputPath);
          const stats = fs.statSync(outputPath);

          await prisma.videoVariant.create({
            data: {
              name: `variant_${i}`,
              filePath: inputPath,
              outputPath: outputPath,
              status: JobStatus.COMPLETED,
              progress: 100,
              fileSize: BigInt(stats.size),
              duration: metadata.format?.duration || null,
              resolution: metadata.streams?.[0]?.width && metadata.streams?.[0]?.height 
                ? `${metadata.streams[0].width}x${metadata.streams[0].height}` 
                : null,
              variantOptions: { ...options, variantIndex: i } as any,
              videoJobId: jobId,
            },
          });
        } catch (variantError) {
          console.error(`Error creating variant ${i} record:`, variantError);
          // Continue with other variants even if one fails
        }
      }

      console.log(`Video processing completed for job ${jobId} - generated ${outputPaths.length} variants`);
    } catch (error) {
      console.error(`Error processing video variants for job ${jobId}:`, error);
      
      // Update job with error status
      await prisma.videoJob.update({
        where: { id: jobId },
        data: {
          status: JobStatus.FAILED,
          errorMessage: error instanceof Error ? error.message : 'Unknown error',
          completedAt: new Date(),
        },
      });
    }
  }

  // Get job status
  static async getJobStatus(req: Request, res: Response) {
    try {
      const { jobId } = req.params;

      const job = await prisma.videoJob.findUnique({
        where: { id: jobId },
        include: {
          variants: true,
        },
      });

      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }

      res.json({
        jobId: job.id,
        status: job.status.toLowerCase(),
        progress: job.progress,
        originalName: job.originalName,
        outputPath: job.outputPath,
        errorMessage: job.errorMessage,
        startedAt: job.startedAt,
        completedAt: job.completedAt,
        variants: job.variants.map(variant => ({
          ...variant,
          variantIndex: (variant.variantOptions as any)?.variantIndex || 0,
          downloadUrl: `/api/jobs/${jobId}/variants/${variant.id}/download`
        })),
        options: job.options,
        totalVariants: job.variants.length,
      });
    } catch (error) {
      console.error('Error getting job status:', error);
      res.status(500).json({ error: 'Failed to get job status' });
    }
  }

  // Download specific variant video
  static async downloadVariant(req: Request, res: Response) {
    try {
      const { jobId, variantId } = req.params;

      const variant = await prisma.videoVariant.findFirst({
        where: { 
          id: variantId,
          videoJobId: jobId 
        },
        include: {
          videoJob: true
        }
      });

      if (!variant || !variant.outputPath) {
        return res.status(404).json({ error: 'Variant not found' });
      }

      if (!fs.existsSync(variant.outputPath)) {
        return res.status(404).json({ error: 'Variant file not found on disk' });
      }

      const filename = `${variant.name}_${variant.videoJob.originalName}`;
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'video/mp4');

      const stream = fs.createReadStream(variant.outputPath);
      stream.pipe(res);
    } catch (error) {
      console.error('Error downloading variant:', error);
      res.status(500).json({ error: 'Failed to download variant' });
    }
  }

  // Download processed video (primary variant)
  static async downloadVideo(req: Request, res: Response) {
    try {
      const { jobId } = req.params;

      const job = await prisma.videoJob.findUnique({
        where: { id: jobId },
      });

      if (!job || !job.outputPath) {
        return res.status(404).json({ error: 'Processed video not found' });
      }

      if (!fs.existsSync(job.outputPath)) {
        return res.status(404).json({ error: 'Video file not found on disk' });
      }

      const filename = `processed_${job.originalName}`;
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'video/mp4');

      const stream = fs.createReadStream(job.outputPath);
      stream.pipe(res);
    } catch (error) {
      console.error('Error downloading video:', error);
      res.status(500).json({ error: 'Failed to download video' });
    }
  }

  // Create batch processing job
  static async createBatchJob(req: Request, res: Response) {
    try {
      if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
        return res.status(400).json({ error: 'No video files uploaded' });
      }

      const options: EnhancedVariantOptions = {
        zoom: req.body.zoom ? parseFloat(req.body.zoom) : undefined,
        rotation: req.body.rotation ? parseFloat(req.body.rotation) : undefined,
        jitter: req.body.jitter ? parseFloat(req.body.jitter) : undefined,
        text: req.body.text || undefined,
        fontSize: req.body.fontSize ? parseInt(req.body.fontSize) : undefined,
        fontColor: req.body.fontColor || undefined,
        position: req.body.position || undefined,
        preset: req.body.preset || undefined,
        colorEffects: req.body.colorEffects ? JSON.parse(req.body.colorEffects) : undefined,
        speed: req.body.speed ? parseFloat(req.body.speed) : undefined,
      };

      // Create batch job
      const batchJob = await prisma.batchJob.create({
        data: {
          name: req.body.batchName || `Batch ${Date.now()}`,
          description: req.body.description || null,
          status: BatchStatus.PENDING,
          totalJobs: req.files.length,
          batchOptions: options as any, // Cast to any to handle Prisma JSON type
          userId: req.body.userId || null,
        },
      });

      // Create individual video jobs for each file
      const videoJobs = await Promise.all(
        req.files.map(async (file: Express.Multer.File) => {
          return prisma.videoJob.create({
            data: {
              originalName: file.originalname,
              filePath: file.path,
              status: JobStatus.PENDING,
              options: options as any, // Cast to any to handle Prisma JSON type
              batchJobId: batchJob.id,
              userId: req.body.userId || null,
            },
          });
        })
      );

      // Start batch processing asynchronously
      EnhancedVariantController.processBatchAsync(batchJob.id, videoJobs, options);

      res.json({
        batchId: batchJob.id,
        status: 'pending',
        totalJobs: req.files.length,
        jobIds: videoJobs.map(job => job.id),
        message: 'Batch processing job created successfully',
      });
    } catch (error) {
      console.error('Error creating batch job:', error);
      res.status(500).json({ error: 'Failed to create batch job' });
    }
  }

  // Process batch asynchronously
  private static async processBatchAsync(batchId: string, videoJobs: any[], options: EnhancedVariantOptions) {
    try {
      // Update batch status to processing
      await prisma.batchJob.update({
        where: { id: batchId },
        data: { 
          status: BatchStatus.PROCESSING,
          startedAt: new Date()
        },
      });

      let completedJobs = 0;
      let failedJobs = 0;

      // Process each video job
      for (const job of videoJobs) {
        try {
          await EnhancedVariantController.processVideoVariantsAsync(job.id, job.filePath, options);
          completedJobs++;
        } catch (error) {
          failedJobs++;
          console.error(`Failed to process job ${job.id}:`, error);
        }

        // Update batch progress
        const progress = ((completedJobs + failedJobs) / videoJobs.length) * 100;
        await prisma.batchJob.update({
          where: { id: batchId },
          data: {
            completedJobs,
            failedJobs,
            progress: Math.round(progress),
          },
        });
      }

      // Mark batch as completed
      await prisma.batchJob.update({
        where: { id: batchId },
        data: {
          status: failedJobs === 0 ? BatchStatus.COMPLETED : BatchStatus.FAILED,
          completedAt: new Date(),
        },
      });

      console.log(`Batch processing completed for batch ${batchId}`);
    } catch (error) {
      console.error(`Error processing batch ${batchId}:`, error);
      
      await prisma.batchJob.update({
        where: { id: batchId },
        data: {
          status: BatchStatus.FAILED,
          completedAt: new Date(),
        },
      });
    }
  }

  // Get batch status
  static async getBatchStatus(req: Request, res: Response) {
    try {
      const { batchId } = req.params;

      const batch = await prisma.batchJob.findUnique({
        where: { id: batchId },
        include: {
          jobs: {
            include: {
              variants: true,
            },
          },
        },
      });

      if (!batch) {
        return res.status(404).json({ error: 'Batch not found' });
      }

      res.json({
        batchId: batch.id,
        name: batch.name,
        status: batch.status.toLowerCase(),
        progress: batch.progress,
        totalJobs: batch.totalJobs,
        completedJobs: batch.completedJobs,
        failedJobs: batch.failedJobs,
        startedAt: batch.startedAt,
        completedAt: batch.completedAt,
        jobs: batch.jobs,
        options: batch.batchOptions,
      });
    } catch (error) {
      console.error('Error getting batch status:', error);
      res.status(500).json({ error: 'Failed to get batch status' });
    }
  }

  // List all jobs for a user
  static async listJobs(req: Request, res: Response) {
    try {
      const { userId } = req.query;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const where = userId ? { userId: userId as string } : {};

      const [jobs, total] = await Promise.all([
        prisma.videoJob.findMany({
          where,
          include: {
            variants: true,
            batchJob: true,
          },
          orderBy: { createdAt: 'desc' },
          skip,
          take: limit,
        }),
        prisma.videoJob.count({ where }),
      ]);

      res.json({
        jobs,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      console.error('Error listing jobs:', error);
      res.status(500).json({ error: 'Failed to list jobs' });
    }
  }

  // Get available color presets and variant information
  static async getColorPresets(req: Request, res: Response) {
    try {
      const presets = {
        vintage: 'Warm, nostalgic look with reduced saturation and sepia tones',
        vibrant: 'Enhanced colors with increased saturation and contrast',
        monochrome: 'Black and white with subtle contrast adjustments',
        warm: 'Warm color temperature with orange/yellow tint',
        cool: 'Cool color temperature with blue tint',
        dramatic: 'High contrast with intense colors and deep shadows',
      };

      const variantFeatures = {
        totalVariants: 5,
        features: [
          'Zoom variations (3-8% zoom per variant)',
          'Rotation adjustments (0.3-1.5 degrees)',
          'Jitter/shake effects (0.3-1.5 intensity)',
          'Volume adjustments (±0.5 to ±1.5 dB)',
          'Ambient track overlay (wind, hum, white noise, rain, ocean)',
          'Intro/outro text overlays with different styles',
          'Metadata randomization for fingerprint avoidance',
          'Color preset application per variant'
        ],
        ambientTracks: [
          'wind - Low-volume wind/breeze ambient',
          'hum - Subtle electrical/mechanical hum',
          'whitenoise - Soft white noise background', 
          'rain - Gentle rain ambient sound',
          'ocean - Ocean waves/water ambient'
        ]
      };

      res.json({ 
        presets,
        variantInfo: variantFeatures,
        processingTime: 'Typically 2-5 minutes for 5 variants depending on video length'
      });
    } catch (error) {
      console.error('Error getting presets:', error);
      res.status(500).json({ error: 'Failed to get presets' });
    }
  }

  // Health check endpoint
  static async healthCheck(req: Request, res: Response) {
    try {
      const dbHealth = await prisma.$queryRaw`SELECT 1`;
      
      res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
        uptime: process.uptime(),
      });
    } catch (error) {
      res.status(500).json({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}
