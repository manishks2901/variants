import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import { VariantOptions } from '../types';

// Audio effect options
export interface AudioEffectOptions {
  volumeChange?: number; // Volume change in dB (-2 to +2)
  ambientTrack?: 'wind' | 'hum' | 'whitenoise' | 'rain' | 'ocean';
  ambientVolume?: number; // Ambient track volume (0.05 to 0.15)
}

// Intro/Outro options
export interface IntroOutroOptions {
  intro?: {
    text: string;
    duration: number; // in seconds
    fontSize?: number;
    fontColor?: string;
    backgroundColor?: string;
    position?: string;
  };
  outro?: {
    text: string;
    duration: number; // in seconds
    fontSize?: number;
    fontColor?: string;
    backgroundColor?: string;
    position?: string;
    cta?: string; // Call to action text
  };
}

// Metadata randomization options
export interface MetadataOptions {
  randomizeMetadata?: boolean;
  customTitle?: string;
  customArtist?: string;
  customComment?: string;
}

// Color effect options
export interface ColorEffectOptions {
  hue?: number;        // Hue shift in degrees (-180 to 180)
  saturation?: number; // Saturation multiplier (0.0 to 3.0)
  brightness?: number; // Brightness adjustment (-1.0 to 1.0)
  contrast?: number;   // Contrast multiplier (0.0 to 3.0)
  gamma?: number;      // Gamma correction (0.1 to 3.0)
}

// Enhanced variant options with all new features
export interface EnhancedVariantOptions extends VariantOptions {
  colorEffects?: ColorEffectOptions;
  audioEffects?: AudioEffectOptions;
  introOutro?: IntroOutroOptions;
  metadataOptions?: MetadataOptions;
  preset?: 'vintage' | 'vibrant' | 'monochrome' | 'warm' | 'cool' | 'dramatic';
  rotation?: number;
  text?: string;
  fontSize?: number;
  fontColor?: string;
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  speed?: number;
  variantIndex?: number; // 0-4 for 5 variants
}

// Predefined color effect presets
const COLOR_PRESETS: Record<string, ColorEffectOptions> = {
  vintage: {
    hue: 15,
    saturation: 0.8,
    brightness: -0.1,
    contrast: 1.2,
    gamma: 1.1,
  },
  vibrant: {
    hue: 0,
    saturation: 1.3,
    brightness: 0.1,
    contrast: 1.2,
    gamma: 0.9
  },
  monochrome: {
    saturation: 0,
    contrast: 1.1,
    brightness: 0.05
  },
  warm: {
    hue: 10,
    saturation: 1.1,
    brightness: 0.05,
    contrast: 1.05,
  },
  cool: {
    hue: -10,
    saturation: 1.1,
    brightness: 0.05,
    contrast: 1.05,
  },
  dramatic: {
    hue: 0,
    saturation: 1.4,
    brightness: -0.05,
    contrast: 1.3,
    gamma: 0.8
  }
};

// Predefined variant configurations for 5 different variants
const VARIANT_PRESETS: EnhancedVariantOptions[] = [
  { // Variant 0: Subtle zoom with warm preset
    variantIndex: 0,
    zoom: 1.05,
    jitter: 0.5,
    rotation: 0.5,
    preset: 'warm',
    audioEffects: { volumeChange: 1, ambientTrack: 'wind', ambientVolume: 0.08 },
    introOutro: {
      intro: { text: 'Enhanced Video', duration: 2, fontSize: 48, fontColor: 'white', backgroundColor: 'black@0.5' },
      outro: { text: 'Thanks for watching!', duration: 2, fontSize: 36, fontColor: 'white', cta: 'Subscribe for more' }
    }
  },
  { // Variant 1: More zoom with vibrant preset
    variantIndex: 1,
    zoom: 1.08,
    jitter: 1.0,
    rotation: -0.8,
    preset: 'vibrant',
    audioEffects: { volumeChange: -1, ambientTrack: 'hum', ambientVolume: 0.06 },
    introOutro: {
      intro: { text: 'Premium Content', duration: 2.5, fontSize: 52, fontColor: 'yellow', backgroundColor: 'blue@0.6' },
      outro: { text: 'Like & Share!', duration: 2.5, fontSize: 40, fontColor: 'yellow', cta: 'Follow us' }
    }
  },
  { // Variant 2: Cool preset with different rotation
    variantIndex: 2,
    zoom: 1.03,
    jitter: 0.8,
    rotation: 1.2,
    preset: 'cool',
    audioEffects: { volumeChange: 0.5, ambientTrack: 'whitenoise', ambientVolume: 0.05 },
    introOutro: {
      intro: { text: 'Exclusive Video', duration: 1.8, fontSize: 44, fontColor: 'cyan', backgroundColor: 'black@0.7' },
      outro: { text: 'Watch more!', duration: 2, fontSize: 38, fontColor: 'cyan', cta: 'Click below' }
    }
  },
  { // Variant 3: Dramatic with higher jitter
    variantIndex: 3,
    zoom: 1.06,
    jitter: 1.5,
    rotation: -1.0,
    preset: 'dramatic',
    audioEffects: { volumeChange: 1.5, ambientTrack: 'rain', ambientVolume: 0.07 },
    introOutro: {
      intro: { text: 'Must Watch!', duration: 2.2, fontSize: 50, fontColor: 'red', backgroundColor: 'black@0.8' },
      outro: { text: 'Amazing content!', duration: 2.3, fontSize: 42, fontColor: 'red', cta: 'Subscribe now' }
    }
  },
  { // Variant 4: Vintage with subtle changes
    variantIndex: 4,
    zoom: 1.04,
    jitter: 0.3,
    rotation: 0.3,
    preset: 'vintage',
    audioEffects: { volumeChange: -0.5, ambientTrack: 'ocean', ambientVolume: 0.09 },
    introOutro: {
      intro: { text: 'Classic Style', duration: 2.5, fontSize: 46, fontColor: 'orange', backgroundColor: 'brown@0.5' },
      outro: { text: 'Timeless quality', duration: 2.5, fontSize: 38, fontColor: 'orange', cta: 'Discover more' }
    }
  }
];

// Ambient track file paths
const AMBIENT_TRACKS: Record<string, string> = {
  wind: 'assets/ambient/wind.mp3',
  hum: 'assets/ambient/hum.mp3',
  whitenoise: 'assets/ambient/whitenoise.mp3',
  rain: 'assets/ambient/rain.mp3',
  ocean: 'assets/ambient/ocean.mp3'
};

export class EnhancedVideoProcessor {
  private static ensureDirectoriesExist() {
    const dirs = ['outputs', 'temp', 'assets', 'assets/ambient'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  // Generate 5 variants from a single input
  static async generateVariants(
    inputPath: string,
    outputDir: string,
    baseOptions: Partial<EnhancedVariantOptions> = {},
    onProgress?: (variantIndex: number, progress: number, totalProgress: number) => void
  ): Promise<string[]> {
    this.ensureDirectoriesExist();
    
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputPaths: string[] = [];
    const timestamp = Date.now();
    const inputBaseName = path.basename(inputPath, path.extname(inputPath));
    const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');

    for (let i = 0; i < 5; i++) {
      const variantOptions: EnhancedVariantOptions = {
        ...VARIANT_PRESETS[i],
        ...baseOptions, // Override with user options if provided
        variantIndex: i
      };

      // Create a clean, safe output filename
      const outputFileName = `variant_${i}_${timestamp}_${sanitizedBaseName}.mp4`;
      const outputPath = path.resolve(outputDir, outputFileName);
      
      console.log(`Processing variant ${i}: ${outputPath}`);
      
      await this.processVideo(
        inputPath,
        outputPath,
        variantOptions,
        (progress: number) => {
          if (onProgress) {
            const totalProgress = Math.round(((i + progress / 100) / 5) * 100);
            onProgress(i, progress, totalProgress);
          }
        }
      );

      outputPaths.push(outputPath);
    }

    return outputPaths;
  }

  // Generate random metadata for fingerprint avoidance
  private static generateRandomMetadata(variantIndex: number): Record<string, string> {
    const titles = [
      'Enhanced Content', 'Premium Video', 'Exclusive Footage', 
      'Quality Content', 'Amazing Video'
    ];
    const artists = [
      'VideoMaker Pro', 'Content Creator', 'Media Studio', 
      'Digital Arts', 'Creative Works'
    ];
    const comments = [
      'Professionally edited', 'High quality content', 'Engaging video',
      'Must watch content', 'Premium production'
    ];

    return {
      title: `${titles[variantIndex]} - V${variantIndex + 1}`,
      artist: `${artists[variantIndex]}`,
      comment: `${comments[variantIndex]} - ${Date.now()}`,
      creation_time: new Date().toISOString(),
      encoder: `VariantProcessor_v${variantIndex + 1}`,
    };
  }

  static async processVideo(
    inputPath: string,
    outputPath: string,
    options: EnhancedVariantOptions,
    onProgress?: (progress: number) => void
  ): Promise<void> {
    this.ensureDirectoriesExist();

    // Validate input file exists
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Input file does not exist: ${inputPath}`);
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Clean up any existing output file
    if (fs.existsSync(outputPath)) {
      try {
        fs.unlinkSync(outputPath);
      } catch (err) {
        console.warn(`Could not remove existing output file: ${outputPath}`);
      }
    }

    console.log(`Processing video: ${inputPath} -> ${outputPath}`);

    return new Promise((resolve, reject) => {
      let command = ffmpeg(inputPath);

      // Set FFmpeg paths
      if (fs.existsSync('/usr/bin/ffmpeg')) {
        ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');
      }
      if (fs.existsSync('/usr/bin/ffprobe')) {
        ffmpeg.setFfprobePath('/usr/bin/ffprobe');
      }

      // Build video filters array
      const filters: string[] = [];

      // Apply zoom effect (enhanced per variant)
      const zoom = options.zoom || 1;
      if (zoom !== 1) {
        filters.push(`scale=iw*${zoom}:ih*${zoom}`);
        filters.push(`crop=iw/${zoom}:ih/${zoom}:(iw-iw/${zoom})/2:(ih-ih/${zoom})/2`);
      }

      // Apply rotation (enhanced per variant)
      if (options.rotation && options.rotation !== 0) {
        const radians = (options.rotation * Math.PI) / 180;
        filters.push(`rotate=${radians}:fillcolor=black@0.0:bilinear=0`);
      }

      // Apply jitter effect (enhanced per variant) - creates camera shake
      if (options.jitter && options.jitter > 0) {
        const intensity = options.jitter;
        filters.push(`crop=iw-${intensity*4}:ih-${intensity*4}:${intensity*2}*sin(t*8):${intensity*2}*cos(t*6)`);
      }

      // Apply color effects based on preset or custom settings
      const colorEffects = options.colorEffects || (options.preset ? COLOR_PRESETS[options.preset] : {});
      
      if (colorEffects) {
        // Combined color adjustments using eq filter
        const eqParams: string[] = [];
        if (colorEffects.saturation !== undefined && colorEffects.saturation !== 1) {
          eqParams.push(`saturation=${colorEffects.saturation}`);
        }
        if (colorEffects.brightness !== undefined && colorEffects.brightness !== 0) {
          eqParams.push(`brightness=${colorEffects.brightness}`);
        }
        if (colorEffects.contrast !== undefined && colorEffects.contrast !== 1) {
          eqParams.push(`contrast=${colorEffects.contrast}`);
        }
        if (colorEffects.gamma !== undefined && colorEffects.gamma !== 1) {
          eqParams.push(`gamma=${colorEffects.gamma}`);
        }
        
        if (eqParams.length > 0) {
          filters.push(`eq=${eqParams.join(':')}`);
        }

        // Hue shift
        if (colorEffects.hue !== undefined && colorEffects.hue !== 0) {
          filters.push(`hue=h=${colorEffects.hue}`);
        }
      }

      // Add text overlay if specified
      if (options.text) {
        const textOptions = {
          text: options.text.replace(/'/g, "\\'"), // Escape single quotes
          fontsize: options.fontSize || 24,
          fontcolor: options.fontColor || 'white',
          x: '(w-text_w)/2',  // Default to center
          y: '(h-text_h)/2'
        };

        // Adjust position based on options
        if (options.position) {
          switch (options.position) {
            case 'top-left':
              textOptions.x = '10';
              textOptions.y = '10';
              break;
            case 'top-right':
              textOptions.x = '(w-text_w-10)';
              textOptions.y = '10';
              break;
            case 'bottom-left':
              textOptions.x = '10';
              textOptions.y = '(h-text_h-10)';
              break;
            case 'bottom-right':
              textOptions.x = '(w-text_w-10)';
              textOptions.y = '(h-text_h-10)';
              break;
            case 'top-center':
              textOptions.x = '(w-text_w)/2';
              textOptions.y = '10';
              break;
            case 'bottom-center':
              textOptions.x = '(w-text_w)/2';
              textOptions.y = '(h-text_h-10)';
              break;
          }
        }

        filters.push(`drawtext=text='${textOptions.text}':fontsize=${textOptions.fontsize}:fontcolor=${textOptions.fontcolor}:x=${textOptions.x}:y=${textOptions.y}`);
      }

      // Apply video filters
      if (filters.length > 0) {
        command = command.videoFilters(filters);
      }

      // Handle audio effects
      const audioFilters: string[] = [];
      let hasAmbientTrack = false;

      // Volume adjustment (±1-2 dB change)
      if (options.audioEffects?.volumeChange) {
        const volumeDb = Math.max(-2, Math.min(2, options.audioEffects.volumeChange));
        audioFilters.push(`[0:a]volume=${volumeDb}dB[va]`);
      }

      // Add ambient track if specified
      if (options.audioEffects?.ambientTrack && options.audioEffects?.ambientVolume) {
        const ambientPath = AMBIENT_TRACKS[options.audioEffects.ambientTrack];
        if (fs.existsSync(ambientPath)) {
          command = command.input(ambientPath);
          hasAmbientTrack = true;
          const mainAudio = audioFilters.length > 0 ? '[va]' : '[0:a]';
          audioFilters.push(`${mainAudio}[1:a]amix=inputs=2:duration=first:weights=1 ${options.audioEffects.ambientVolume}[aout]`);
        }
      }

      // Speed adjustment for audio
      if (options.speed && options.speed !== 1) {
        const speed = Math.max(0.5, Math.min(2.0, options.speed)); // Clamp to valid range
        const inputAudio = audioFilters.length > 0 ? (hasAmbientTrack ? '[aout]' : '[va]') : '[0:a]';
        audioFilters.push(`${inputAudio}atempo=${speed}[afinal]`);
      }

      // Apply audio filters if any
      if (audioFilters.length > 0) {
        command = command.complexFilter(audioFilters.join(';'));
        const finalAudioMap = audioFilters[audioFilters.length - 1].includes('[afinal]') ? '[afinal]' : 
                              audioFilters[audioFilters.length - 1].includes('[aout]') ? '[aout]' : '[va]';
        command = command.map(finalAudioMap);
      }

      // Speed adjustment for video
      if (options.speed && options.speed !== 1) {
        const speed = Math.max(0.5, Math.min(2.0, options.speed)); // Clamp to valid range
        command = command.videoFilters(`setpts=${1/speed}*PTS`);
      }

      // Add randomized metadata to avoid fingerprinting
      if (options.metadataOptions?.randomizeMetadata || options.variantIndex !== undefined) {
        const randomMetadata = this.generateRandomMetadata(options.variantIndex || 0);
        Object.entries(randomMetadata).forEach(([key, value]) => {
          // Sanitize metadata values and remove spaces to avoid FFmpeg parsing issues
          const sanitizedValue = String(value).replace(/[^\w-_.]/g, '_');
          command = command.outputOption('-metadata', `${key}=${sanitizedValue}`);
        });
      }

      // Output settings
      command = command
        .videoCodec('libx264')
        .audioCodec('aac')
        .outputOption('-crf', '23')
        .outputOption('-preset', 'medium')
        .outputOption('-movflags', '+faststart')
        .output(outputPath);

      // Progress tracking
      command.on('progress', (progress) => {
        if (onProgress && progress.percent) {
          onProgress(Math.round(progress.percent));
        }
      });

      // Error handling
      command.on('error', (err) => {
        console.error('FFmpeg error:', err);
        console.error(`Input: ${inputPath}`);
        console.error(`Output: ${outputPath}`);
        console.error(`Output directory exists: ${fs.existsSync(path.dirname(outputPath))}`);
        console.error(`Input file exists: ${fs.existsSync(inputPath)}`);
        
        // Clean up partial output file if it exists
        if (fs.existsSync(outputPath)) {
          try {
            fs.unlinkSync(outputPath);
          } catch (cleanupErr) {
            console.warn(`Could not clean up partial output file: ${outputPath}`);
          }
        }
        
        reject(new Error(`Video processing failed: ${err.message}`));
      });

      // Success handling
      command.on('end', () => {
        console.log(`Video processing completed successfully: ${outputPath}`);
        
        // Verify output file was created
        if (!fs.existsSync(outputPath)) {
          reject(new Error(`Output file was not created: ${outputPath}`));
          return;
        }
        
        resolve();
      });

      // Start processing
      command.run();
    });
  }

  // Get video metadata
  static async getVideoMetadata(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(filePath, (err, metadata) => {
        if (err) {
          reject(err);
        } else {
          resolve(metadata);
        }
      });
    });
  }

  // Generate thumbnail
  static async generateThumbnail(inputPath: string, outputPath: string, timemark: string = '00:00:01'): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .screenshots({
          timestamps: [timemark],
          filename: path.basename(outputPath),
          folder: path.dirname(outputPath),
          size: '320x240'
        })
        .on('end', () => resolve())
        .on('error', (err) => reject(err));
    });
  }
}
