"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const database_1 = require("./database");
const enhanced_1 = __importDefault(require("./routes/enhanced"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = process.env.ENHANCED_PORT || process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
// Ensure required directories exist
const ensureDirectoriesExist = () => {
    const dirs = ['uploads', 'outputs', 'temp'];
    dirs.forEach(dir => {
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        }
    });
};
// Routes
app.use('/api/v1', routes_1.variantRoutes); // Original API routes
app.use('/api/v2', enhanced_1.default); // Enhanced API routes with database
// Static file serving for downloads
app.use('/downloads', express_1.default.static(path_1.default.join(__dirname, '../outputs')));
// API documentation endpoint
app.get('/api/docs', (req, res) => {
    res.json({
        title: 'Enhanced Variats Video Processing API',
        version: '2.0.0',
        description: 'Advanced video processing API with database persistence, batch processing, and enhanced color effects',
        endpoints: {
            'GET /api/v2/health': 'Health check with database status',
            'POST /api/v2/process': 'Process single video with enhanced options',
            'POST /api/v2/batch': 'Process multiple videos in batch',
            'GET /api/v2/job/:jobId': 'Get job status and details',
            'GET /api/v2/job/:jobId/download': 'Download processed video',
            'GET /api/v2/batch/:batchId': 'Get batch processing status',
            'GET /api/v2/jobs': 'List all jobs with pagination',
            'GET /api/v2/presets': 'Get available color effect presets',
        },
        features: {
            database: 'PostgreSQL with Prisma ORM',
            colorEffects: 'Hue, saturation, brightness, contrast, gamma adjustments',
            presets: 'Vintage, vibrant, monochrome, warm, cool, dramatic',
            batchProcessing: 'Multiple file processing with progress tracking',
            cloudStorage: 'Google Cloud Storage and AWS S3 support (configurable)',
            monitoring: 'Job status tracking and system metrics',
        },
        parameters: {
            zoom: 'Video zoom factor (e.g., 1.5)',
            rotation: 'Rotation in degrees (e.g., 45)',
            jitter: 'Noise/jitter intensity (0-10)',
            speed: 'Playback speed multiplier (0.25=4x slower, 0.5=2x slower, 1.0=normal, 2.0=2x faster, 4.0=4x faster)',
            text: 'Text overlay content',
            fontSize: 'Text size in pixels',
            fontColor: 'Text color (e.g., white, #FF0000)',
            position: 'Text position (center, top-left, top-right, bottom-left, bottom-right, top-center, bottom-center)',
            preset: 'Color preset (vintage, vibrant, monochrome, warm, cool, dramatic)',
            colorEffects: 'Custom color effects as JSON object',
        },
        exampleRequests: {
            singleVideo: {
                method: 'POST',
                url: '/api/v2/process',
                contentType: 'multipart/form-data',
                fields: {
                    video: 'video_file.mp4',
                    zoom: '1.2',
                    speed: '2.0',
                    text: 'Sample Text',
                    preset: 'vintage',
                    userId: 'optional-user-id'
                }
            },
            batchVideo: {
                method: 'POST',
                url: '/api/v2/batch',
                contentType: 'multipart/form-data',
                fields: {
                    videos: ['video1.mp4', 'video2.mp4'],
                    batchName: 'My Batch Job',
                    preset: 'dramatic',
                    speed: '0.5',
                    text: 'Batch Text'
                }
            },
            customColorEffects: {
                colorEffects: JSON.stringify({
                    hue: 30,
                    saturation: 1.2,
                    brightness: 0.1,
                    contrast: 1.1,
                    gamma: 0.9
                })
            }
        }
    });
});
// Root endpoint
app.get('/', (req, res) => {
    res.json({
        service: 'Enhanced Variats Video Processing API',
        version: '2.0.0',
        status: 'running',
        documentation: '/api/docs',
        endpoints: {
            v1: '/api/v1 (Original API)',
            v2: '/api/v2 (Enhanced API with database)'
        }
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    if (err instanceof multer_1.default.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large. Maximum size is 100MB.' });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({ error: 'Too many files. Maximum is 10 files per batch.' });
        }
    }
    res.status(500).json({
        error: 'Internal server error',
        message: err.message || 'Something went wrong'
    });
});
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: `Route ${req.originalUrl} not found`,
        availableEndpoints: '/api/docs'
    });
});
// Graceful shutdown
const gracefulShutdown = async () => {
    console.log('Received shutdown signal, closing server...');
    try {
        await (0, database_1.disconnectDatabase)();
        console.log('Database disconnected');
        process.exit(0);
    }
    catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
    }
};
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
// Start server
const startServer = async () => {
    try {
        // Ensure directories exist
        ensureDirectoriesExist();
        // Connect to database
        await (0, database_1.connectDatabase)();
        // Start the server
        app.listen(PORT, () => {
            console.log(`🚀 Enhanced Variats Video Processing API running on port ${PORT}`);
            console.log(`📖 API Documentation: http://localhost:${PORT}/api/docs`);
            console.log(`🔗 Health Check: http://localhost:${PORT}/api/v2/health`);
            console.log(`📁 Original API: http://localhost:${PORT}/api/v1`);
            console.log(`✨ Enhanced API: http://localhost:${PORT}/api/v2`);
            console.log('');
            console.log('Available Features:');
            console.log('• Database persistence with PostgreSQL');
            console.log('• Enhanced color effects and presets');
            console.log('• Batch processing capabilities');
            console.log('• Job progress tracking');
            console.log('• Cloud storage ready (Google Cloud/AWS)');
            console.log('• System monitoring and metrics');
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
startServer();
//# sourceMappingURL=enhanced-server.js.map