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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path = __importStar(require("path"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
// Serve static files (for downloads)
app.use('/outputs', express_1.default.static(path.join(__dirname, '../outputs')));
// Routes
app.use('/api/variants', routes_1.variantRoutes);
// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});
// API documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        name: 'Variats API',
        version: '1.0.0',
        description: 'Video variant processing API with zoom, jitter, rotation, volume filters, ambient tracks, and metadata randomization',
        endpoints: {
            'POST /api/variants/process': 'Process variant with file path',
            'POST /api/variants/upload': 'Upload and process video file',
            'POST /api/variants/batch': 'Process multiple variants',
            'GET /api/variants/job/:jobId': 'Get job status',
            'GET /api/variants/jobs': 'Get all jobs',
            'DELETE /api/variants/job/:jobId': 'Delete job',
            'GET /api/variants/download/:jobId': 'Download completed variant'
        }
    });
});
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found'
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    if (err instanceof multer_1.default.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                error: 'File too large. Maximum size is 500MB.'
            });
        }
    }
    res.status(500).json({
        success: false,
        error: err.message || 'Internal server error'
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Variats API running on port ${PORT}`);
    console.log(`📁 Health check: http://localhost:${PORT}/health`);
    console.log(`📖 API docs: http://localhost:${PORT}/api`);
});
exports.default = app;
//# sourceMappingURL=index.js.map