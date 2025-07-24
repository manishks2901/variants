import express from 'express';
import cors from 'cors';
import multer from 'multer';
import * as path from 'path';
import { variantRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files (for downloads)
app.use('/outputs', express.static(path.join(__dirname, '../outputs')));

// Routes
app.use('/api/variants', variantRoutes);

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
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  
  if (err instanceof multer.MulterError) {
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

export default app;