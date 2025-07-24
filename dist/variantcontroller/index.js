"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantProcessor = void 0;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const uuid_1 = require("uuid");
const events_1 = require("events");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
// Set FFmpeg paths
fluent_ffmpeg_1.default.setFfmpegPath('/usr/bin/ffmpeg');
fluent_ffmpeg_1.default.setFfprobePath('/usr/bin/ffprobe');
class VariantProcessor extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.jobs = new Map();
    }
    async processVideo(inputPath, options) {
        const jobId = (0, uuid_1.v4)();
        const inputBaseName = path.basename(inputPath, path.extname(inputPath));
        const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');
        const outputFilename = `variant_${Date.now()}_${sanitizedBaseName}.mp4`;
        const outputPath = path.resolve(process.cwd(), 'outputs', outputFilename);
        const job = {
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
        }
        catch (error) {
            job.status = 'failed';
            job.error = error instanceof Error ? error.message : 'Unknown error';
            job.completedAt = new Date();
            this.emit('jobFailed', job);
        }
        return job;
    }
    async createVariantJob(inputPath, outputPath, options) {
        const jobId = (0, uuid_1.v4)();
        const finalOptions = options || {};
        const job = {
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
    async processVideoInternal(inputPath, outputPath, options, job) {
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
            let command = (0, fluent_ffmpeg_1.default)(inputPath);
            // 1. Video filters array
            const videoFilters = [];
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
                videoFilters.push(`pad=iw+${padding}:ih+${padding}:${Math.round(padding / 2)}:${Math.round(padding / 2)}:black`);
            }
            // 4. Rotation
            if (options.rotate && options.rotate !== 0) {
                const rotation = options.rotate;
                console.log(`Applying rotation: ${rotation} degrees`);
                videoFilters.push(`rotate=${rotation}*PI/180:fillcolor=black`);
            }
            // 5. Speed adjustment (playback speed)
            if (options.speed && options.speed !== 1) {
                const speed = Math.max(0.25, Math.min(4.0, options.speed)); // Clamp speed between 0.25x and 4x
                console.log(`Applying speed adjustment: ${speed}x`);
                videoFilters.push(`setpts=PTS/${speed}`);
            }
            // 6. Color filters
            if (options.colorFilter && options.colorFilter !== 'none') {
                console.log(`Applying color filter: ${options.colorFilter}`);
                switch (options.colorFilter) {
                    case 'vivid':
                        videoFilters.push(`eq=saturation=1.4:contrast=1.15:brightness=0.05`);
                        break;
                    case 'vibrant':
                        videoFilters.push(`eq=saturation=1.6:contrast=1.2:gamma=0.9`);
                        break;
                    case 'saturated':
                        videoFilters.push(`eq=saturation=1.8:contrast=1.1`);
                        break;
                    case 'contrast':
                        videoFilters.push(`eq=contrast=1.3:brightness=0.02`);
                        break;
                }
            }
            // 7. Text overlay (using intro/outro text from options)
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
                    videoFilters.push(`drawtext=text=${safeText}:fontcolor=yellow:fontsize=${fontSize - 6}:x=(w-text_w)/2:y=h-100`);
                }
            }
            // Apply video filters if any
            if (videoFilters.length > 0) {
                console.log(`Applying video filters: ${videoFilters.join(',')}`);
                try {
                    command = command.videoFilters(videoFilters.join(','));
                }
                catch (filterError) {
                    console.error('Error applying video filters:', filterError);
                    throw new Error(`Invalid video filter: ${filterError instanceof Error ? filterError.message : 'Unknown filter error'}`);
                }
            }
            // 8. Audio processing (handle both volume and speed changes)
            const audioFilters = [];
            // Volume adjustment
            if (options.volumeDb && options.volumeDb !== 0) {
                console.log(`Applying volume adjustment: ${options.volumeDb}dB`);
                audioFilters.push(`volume=${options.volumeDb}dB`);
            }
            // Speed adjustment for audio (atempo filter)
            if (options.speed && options.speed !== 1) {
                const speed = Math.max(0.25, Math.min(4.0, options.speed));
                console.log(`Applying audio speed adjustment: ${speed}x`);
                // FFmpeg atempo filter has limits, so we may need to chain multiple atempo filters
                let currentSpeed = speed;
                while (currentSpeed !== 1.0) {
                    if (currentSpeed >= 0.5 && currentSpeed <= 2.0) {
                        audioFilters.push(`atempo=${currentSpeed}`);
                        break;
                    }
                    else if (currentSpeed > 2.0) {
                        audioFilters.push(`atempo=2.0`);
                        currentSpeed = currentSpeed / 2.0;
                    }
                    else {
                        audioFilters.push(`atempo=0.5`);
                        currentSpeed = currentSpeed / 0.5;
                    }
                }
            }
            // Apply audio filters if any
            if (audioFilters.length > 0) {
                try {
                    command = command.audioFilters(audioFilters.join(','));
                }
                catch (audioError) {
                    console.error('Error applying audio filters:', audioError);
                    throw new Error(`Invalid audio filter: ${audioError instanceof Error ? audioError.message : 'Unknown audio error'}`);
                }
            }
            // 9. Add metadata
            if (options.metadata) {
                console.log(`Adding metadata:`, options.metadata);
                try {
                    Object.entries(options.metadata).forEach(([key, value]) => {
                        // Sanitize metadata values and remove spaces to avoid FFmpeg parsing issues
                        const sanitizedValue = String(value).replace(/[^\w-_.]/g, '_');
                        command = command.outputOptions(['-metadata', `${key}=${sanitizedValue}`]);
                    });
                }
                catch (metadataError) {
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
    getJob(jobId) {
        return this.jobs.get(jobId);
    }
    getAllJobs() {
        return Array.from(this.jobs.values());
    }
    deleteJob(jobId) {
        const job = this.jobs.get(jobId);
        if (job) {
            this.jobs.delete(jobId);
            this.emit('jobDeleted', job);
            return true;
        }
        return false;
    }
    // Generate random metadata for fingerprint avoidance
    generateRandomMetadata() {
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
    async processWithRandomMetadata(inputPath, baseOptions = {}) {
        const options = {
            zoom: baseOptions.zoom || 1.08,
            jitter: baseOptions.jitter || 1.0,
            rotate: baseOptions.rotate || Math.random() * 2 - 1, // Random rotation between -1 and 1
            volumeDb: baseOptions.volumeDb || 2.5,
            speed: baseOptions.speed || 1.0, // Default to normal speed
            colorFilter: baseOptions.colorFilter || 'none', // Default to no color filter
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
exports.VariantProcessor = VariantProcessor;
//# sourceMappingURL=index.js.map