import { Router } from 'express';
import multer from 'multer';
import { VariantController } from '../controllers/variantController';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const extension = file.originalname.split('.').pop();
    cb(null, `upload_${timestamp}.${extension}`);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['video/mp4', 'video/avi', 'video/mov', 'video/mkv'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only video files are allowed.'));
    }
  },
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB limit
  }
});

const router = Router();
const variantController = new VariantController();

// Process single variant with file path
router.post('/process', variantController.processVariant.bind(variantController));

// Upload and process variant
router.post('/upload', upload.single('video'), variantController.uploadAndProcess.bind(variantController));

// Process batch variants
router.post('/batch', variantController.processBatchVariants.bind(variantController));

// Get job status
router.get('/job/:jobId', variantController.getJobStatus.bind(variantController));

// Get all jobs
router.get('/jobs', variantController.getAllJobs.bind(variantController));

// Delete job
router.delete('/job/:jobId', variantController.deleteJob.bind(variantController));

// Download completed variant
router.get('/download/:jobId', variantController.downloadVariant.bind(variantController));

export { router as variantRoutes };