"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const enhancedVariantController_1 = require("../controllers/enhancedVariantController");
const router = express_1.default.Router();
// Configure multer for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}_${Math.round(Math.random() * 1E9)}${path_1.default.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});
const upload = (0, multer_1.default)({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedExtensions = /mp4|avi|mov|wmv|flv|webm|mkv/;
        const allowedMimeTypes = /video\//;
        const extname = allowedExtensions.test(path_1.default.extname(file.originalname).toLowerCase());
        const mimetype = allowedMimeTypes.test(file.mimetype);
        console.log('File filter debug:', {
            originalname: file.originalname,
            extension: path_1.default.extname(file.originalname).toLowerCase(),
            mimetype: file.mimetype,
            extnameTest: extname,
            mimetypeTest: mimetype
        });
        if (mimetype && extname) {
            return cb(null, true);
        }
        else {
            cb(new Error('Only video files are allowed'));
        }
    },
    limits: {
        fileSize: 100 * 1024 * 1024, // 100MB limit
    }
});
// Health check
router.get('/health', enhancedVariantController_1.EnhancedVariantController.healthCheck);
// Single video processing (generates 5 variants)
router.post('/process', upload.single('video'), enhancedVariantController_1.EnhancedVariantController.createVideoJob);
// Batch video processing
router.post('/batch', upload.array('videos', 10), enhancedVariantController_1.EnhancedVariantController.createBatchJob);
// Job status endpoints
router.get('/job/:jobId', enhancedVariantController_1.EnhancedVariantController.getJobStatus);
router.get('/job/:jobId/download', enhancedVariantController_1.EnhancedVariantController.downloadVideo);
router.get('/job/:jobId/variants/:variantId/download', enhancedVariantController_1.EnhancedVariantController.downloadVariant);
// Batch status endpoints
router.get('/batch/:batchId', enhancedVariantController_1.EnhancedVariantController.getBatchStatus);
// List jobs
router.get('/jobs', enhancedVariantController_1.EnhancedVariantController.listJobs);
// Get color presets
router.get('/presets', enhancedVariantController_1.EnhancedVariantController.getColorPresets);
exports.default = router;
//# sourceMappingURL=enhanced.js.map