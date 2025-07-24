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
class VariantProcessor extends events_1.EventEmitter {
    constructor() {
        super();
        this.jobs = new Map();
        this.ambientTracks = [
            'assets/ambient/wind_low.wav',
            'assets/ambient/hum_low.wav',
            'assets/ambient/whitenoise_low.wav',
        ];
        this.ensureDirectories();
    }
    ensureDirectories() {
        const dirs = ['uploads', 'outputs', 'assets/ambient', 'temp'];
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }
    async createVariantJob(inputVideo, outputVideo, options = {}) {
        const jobId = (0, uuid_1.v4)();
        const job = {
            id: jobId,
            status: 'pending',
            inputVideo,
            outputVideo,
            options: this.generateRandomOptions(options),
            createdAt: new Date(),
            progress: 0,
        };
        this.jobs.set(jobId, job);
        // Start processing asynchronously
        setImmediate(() => this.processVariantAsync(jobId));
        return jobId;
    }
    generateRandomOptions(options) {
        return {
            zoom: options.zoom ?? (1.0 + Math.random() * 0.15),
            jitter: options.jitter ?? Math.floor(Math.random() * 8 + 2),
            rotate: options.rotate ?? (Math.random() * 4 - 2),
            volumeDb: options.volumeDb ?? (Math.random() * 4 - 2),
            ambientTrack: options.ambientTrack ?? this.getRandomAmbientTrack(),
            introText: options.introText ?? this.getRandomIntroText(),
            outroText: options.outroText ?? this.getRandomOutroText(),
            metadata: {
                ...this.generateRandomMetadata(),
                ...options.metadata,
            },
        };
    }
    async processVariantAsync(jobId) {
        const job = this.jobs.get(jobId);
        if (!job)
            return;
        try {
            job.status = 'processing';
            this.emit('jobStatusChanged', job);
            await this.processVariant(job);
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
            console.error(`Job ${jobId} failed:`, error);
        }
    }
    async processVariant(job) {
        return new Promise((resolve, reject) => {
            const { inputVideo, outputVideo, options } = job;
            // Ensure output directory exists
            const outputDir = path.dirname(outputVideo);
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }
            let command = (0, fluent_ffmpeg_1.default)(inputVideo);
            // Video filters array
            let vfFilters = [];
            // 1. Apply zoom
            if (options.zoom && options.zoom !== 1.0) {
                vfFilters.push(`scale=iw*${options.zoom}:ih*${options.zoom},crop=iw/${options.zoom}:ih/${options.zoom}`);
            }
            // 2. Apply jitter (random translation)
            if (options.jitter) {
                const jitterX = Math.floor(Math.random() * options.jitter * 2) - options.jitter;
                const jitterY = Math.floor(Math.random() * options.jitter * 2) - options.jitter;
                vfFilters.push(`pad=iw+${Math.abs(jitterX) * 2}:ih+${Math.abs(jitterY) * 2}:${Math.abs(jitterX) + jitterX}:${Math.abs(jitterY) + jitterY}:black`);
            }
            // 3. Apply rotation
            if (options.rotate && options.rotate !== 0) {
                vfFilters.push(`rotate=${options.rotate}*PI/180:ow=rotw(${options.rotate}*PI/180):oh=roth(${options.rotate}*PI/180):c=black`);
            }
            // 4. Add intro text overlay
            if (options.introText) {
                const escapedText = options.introText.replace(/'/g, "\\'").replace(/:/g, "\\:");
                vfFilters.push(`drawtext=text='${escapedText}':fontcolor=white:fontsize=48:x=(w-text_w)/2:y=50:enable='lt(t,3)':box=1:boxcolor=black@0.5:boxborderw=10`);
            }
            // 5. Add outro text overlay
            if (options.outroText) {
                const escapedText = options.outroText.replace(/'/g, "\\'").replace(/:/g, "\\:");
                vfFilters.push(`drawtext=text='${escapedText}':fontcolor=yellow:fontsize=42:x=(w-text_w)/2:y=h-100:enable='gte(t,duration-4)':box=1:boxcolor=black@0.5:boxborderw=10`);
            }
            // Apply video filters
            if (vfFilters.length > 0) {
                command = command.videoFilters(vfFilters.join(','));
            }
            // 6. Audio processing
            let audioFilters = [];
            // Volume adjustment
            if (options.volumeDb && options.volumeDb !== 0) {
                audioFilters.push(`volume=${options.volumeDb}dB`);
            }
            // 7. Add ambient track if available
            if (options.ambientTrack && fs.existsSync(options.ambientTrack)) {
                command = command.input(options.ambientTrack);
                command = command.complexFilter([
                    '[0:a]volume=1.0[main]',
                    '[1:a]volume=0.05[ambient]',
                    '[main][ambient]amix=inputs=2:duration=first:dropout_transition=0[aout]'
                ]).outputOptions(['-map', '0:v', '-map', '[aout]']);
            }
            else if (audioFilters.length > 0) {
                command = command.audioFilters(audioFilters);
            }
            // 8. Add metadata randomization
            if (options.metadata) {
                Object.entries(options.metadata).forEach(([key, value]) => {
                    // Sanitize metadata values and remove spaces to avoid FFmpeg parsing issues
                    const sanitizedValue = String(value).replace(/[^\w-_.]/g, '_');
                    command = command.outputOptions(['-metadata', `${key}=${sanitizedValue}`]);
                });
            }
            // Progress tracking
            command.on('progress', (progress) => {
                job.progress = Math.round(progress.percent || 0);
                this.emit('jobProgress', job);
            });
            command
                .on('end', () => {
                console.log(`Job ${job.id} completed successfully`);
                resolve();
            })
                .on('error', (err) => {
                console.error(`Job ${job.id} failed:`, err);
                reject(err);
            })
                .outputOptions(['-c:v', 'libx264', '-c:a', 'aac', '-preset', 'medium'])
                .save(outputVideo);
        });
    }
    getJob(jobId) {
        return this.jobs.get(jobId);
    }
    getAllJobs() {
        return Array.from(this.jobs.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    deleteJob(jobId) {
        return this.jobs.delete(jobId);
    }
    getRandomAmbientTrack() {
        const availableTracks = this.ambientTracks.filter(track => fs.existsSync(track));
        if (availableTracks.length === 0)
            return '';
        return availableTracks[Math.floor(Math.random() * availableTracks.length)];
    }
    getRandomIntroText() {
        const intros = [
            'Welcome to this content!',
            "Let's dive right in...",
            'Here\'s what you need to know:',
            'Starting now...',
            'Get ready for amazing content!',
            'This is going to be epic!'
        ];
        return intros[Math.floor(Math.random() * intros.length)];
    }
    getRandomOutroText() {
        const outros = [
            'Like and Subscribe for more!',
            "Don't forget to hit that bell!",
            'Share with your friends!',
            'Comment your thoughts below!',
            'Follow for daily content!',
            'Thanks for watching!'
        ];
        return outros[Math.floor(Math.random() * outros.length)];
    }
    generateRandomMetadata() {
        const creators = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Echo', 'Foxtrot'];
        const genres = ['Educational', 'Entertainment', 'Tutorial', 'Review', 'Gaming', 'Tech'];
        return {
            title: `Content_Variant_${Math.floor(Math.random() * 10000)}`,
            artist: `Creator_${creators[Math.floor(Math.random() * creators.length)]}`,
            album: `Collection_${Math.floor(Math.random() * 900 + 100)}`,
            date: `${Math.floor(Math.random() * 5 + 2020)}`,
            comment: `Generated_${Math.floor(Math.random() * 90000 + 10000)}`,
            genre: genres[Math.floor(Math.random() * genres.length)],
            description: `Variant content with randomized metadata ${Math.floor(Math.random() * 1000)}`,
        };
    }
}
exports.VariantProcessor = VariantProcessor;
//# sourceMappingURL=index.js.map