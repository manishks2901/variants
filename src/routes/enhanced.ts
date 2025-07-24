import express from 'express';
import multer from 'multer';
import path from 'path';
import { EnhancedVariantController } from '../controllers/enhancedVariantController';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}_${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = /mp4|avi|mov|wmv|flv|webm|mkv/;
    const allowedMimeTypes = /video\//;
    const extname = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedMimeTypes.test(file.mimetype);
    
    console.log('File filter debug:', {
      originalname: file.originalname,
      extension: path.extname(file.originalname).toLowerCase(),
      mimetype: file.mimetype,
      extnameTest: extname,
      mimetypeTest: mimetype
    });
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only video files are allowed'));
    }
  },
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  }
});

// Health check
router.get('/health', EnhancedVariantController.healthCheck);

// Single video processing (generates 5 variants)
router.post('/process', upload.single('video'), EnhancedVariantController.createVideoJob);

// Batch video processing
router.post('/batch', upload.array('videos', 10), EnhancedVariantController.createBatchJob);

// Job status endpoints
router.get('/job/:jobId', EnhancedVariantController.getJobStatus);
router.get('/job/:jobId/download', EnhancedVariantController.downloadVideo);
router.get('/job/:jobId/variants/:variantId/download', EnhancedVariantController.downloadVariant);

// Batch status endpoints
router.get('/batch/:batchId', EnhancedVariantController.getBatchStatus);

// List jobs
router.get('/jobs', EnhancedVariantController.listJobs);

// Get color presets
router.get('/presets', EnhancedVariantController.getColorPresets);

export default router;
