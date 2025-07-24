# Enhanced Variats Video Processing API v2.0

An advanced video processing API with database persistence, batch processing, and Python-inspired color effects.

## 🚀 New Features Added

### ✅ Database Integration with Prisma + PostgreSQL
- **Persistent job storage** - All video processing jobs are stored in the database
- **Job history tracking** - Complete audit trail of all processing activities
- **User management** - Optional user association with jobs
- **Batch job management** - Organize multiple videos into batch processing jobs
- **Real-time progress tracking** - Monitor processing progress in the database

### ✅ Enhanced Color Effects (Python-Inspired)
- **Hue adjustment** - Shift colors across the spectrum (-180° to +180°)
- **Saturation control** - Enhance or reduce color intensity (0.0 to 3.0)
- **Brightness adjustment** - Lighten or darken video (-1.0 to +1.0)
- **Contrast enhancement** - Increase or decrease contrast (0.0 to 3.0)
- **Gamma correction** - Fine-tune brightness curves (0.1 to 3.0)
- **Color tinting/colorize** - Apply custom color overlays

### ✅ Predefined Color Presets
- **Vintage** - Warm, nostalgic look with reduced saturation
- **Vibrant** - Enhanced colors with increased saturation
- **Monochrome** - Black and white with subtle contrast
- **Warm** - Warm color temperature with orange/yellow tint
- **Cool** - Cool color temperature with blue tint
- **Dramatic** - High contrast with intense colors

### ✅ Batch Processing Capabilities
- **Multiple file upload** - Process up to 10 videos simultaneously
- **Batch progress tracking** - Monitor overall batch completion
- **Individual job status** - Track each video within a batch
- **Batch naming and descriptions** - Organize your processing jobs
- **Failed job handling** - Graceful error handling for batch operations

### ✅ Cloud Storage Integration (Ready)
- **Google Cloud Storage** support
- **AWS S3** support
- **Local storage** fallback
- **Configurable via environment variables**
- **Automatic file management**

## 🏗️ Database Schema

The enhanced API uses a comprehensive database schema:

- **Users** - Manage API users and authentication
- **VideoJobs** - Track individual video processing tasks
- **VideoVariants** - Store different processed versions
- **BatchJobs** - Manage multiple video processing batches
- **ProcessingTemplates** - Reusable processing configurations
- **SystemMetrics** - Monitor system performance

## 🔧 API Endpoints

### Health & Information
- `GET /api/v2/health` - Health check with database status
- `GET /api/docs` - Comprehensive API documentation
- `GET /api/v2/presets` - Available color effect presets

### Single Video Processing
- `POST /api/v2/process` - Process single video with enhanced options

### Batch Processing
- `POST /api/v2/batch` - Process multiple videos in batch
- `GET /api/v2/batch/:batchId` - Get batch processing status

### Job Management
- `GET /api/v2/job/:jobId` - Get job status and details
- `GET /api/v2/job/:jobId/download` - Download processed video
- `GET /api/v2/jobs` - List all jobs with pagination

## 📝 Enhanced Parameters

### Basic Parameters
- `zoom` - Video zoom factor (e.g., 1.5)
- `rotation` - Rotation in degrees (e.g., 45)
- `jitter` - Noise/jitter intensity (0-10)
- `speed` - Playback speed multiplier (0.25 to 4.0)
  - Values < 1.0 create slow motion (e.g., 0.5 = 2x slower)
  - Values > 1.0 create fast forward (e.g., 2.0 = 2x faster)
  - Automatically handles audio/video synchronization

### Text Overlay Parameters
- `text` - Text overlay content
- `fontSize` - Text size in pixels
- `fontColor` - Text color (e.g., white, #FF0000)
- `position` - Text position (center, top-left, top-right, bottom-left, bottom-right, top-center, bottom-center)

### Color Effect Parameters
- `preset` - Predefined color preset (vintage, vibrant, monochrome, warm, cool, dramatic)
- `colorEffects` - Custom color effects as JSON object:
  ```json
  {
    "hue": 30,
    "saturation": 1.2,
    "brightness": 0.1,
    "contrast": 1.1,
    "gamma": 0.9,
    "colorize": {
      "hue": 25,
      "saturation": 0.3,
      "lightness": 0.1
    }
  }
  ```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- FFmpeg installed on system

### Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Initialize database:**
```bash
npx prisma migrate dev --name init
```

3. **Start enhanced server:**
```bash
npm run dev:enhanced
```

The enhanced API will be available at:
- Health Check: http://localhost:3000/api/v2/health
- Documentation: http://localhost:3000/api/docs
- Enhanced API: http://localhost:3000/api/v2/*
- Legacy API: http://localhost:3000/api/v1/*

## 📋 Example Usage

### Single Video with Custom Effects
```bash
curl -X POST http://localhost:3000/api/v2/process \
  -F "video=@sample.mp4" \
  -F "zoom=1.2" \
  -F "text=Amazing Video" \
  -F "fontSize=32" \
  -F "fontColor=yellow" \
  -F "position=bottom-right" \
  -F "preset=dramatic"
```

### Batch Processing
```bash
curl -X POST http://localhost:3000/api/v2/batch \
  -F "videos=@video1.mp4" \
  -F "videos=@video2.mp4" \
  -F "batchName=My Batch" \
  -F "preset=vintage" \
  -F "text=Batch Processed"
```

### Custom Color Effects
```bash
curl -X POST http://localhost:3000/api/v2/process \
  -F "video=@sample.mp4" \
  -F "colorEffects={\"hue\":30,\"saturation\":1.3,\"brightness\":0.1,\"contrast\":1.2}"
```

### Speed Control Examples
```bash
# Slow motion (2x slower)
curl -X POST http://localhost:3000/api/v2/process \
  -F "video=@sample.mp4" \
  -F "speed=0.5" \
  -F "text=Slow Motion"

# Fast forward (3x faster)
curl -X POST http://localhost:3000/api/v2/process \
  -F "video=@sample.mp4" \
  -F "speed=3.0" \
  -F "text=Fast Forward"
```

## 🎨 Color Presets Examples

### Vintage Effect
Creates a warm, nostalgic look with:
- Slight hue shift (+15°)
- Reduced saturation (0.8x)
- Slightly darker (-0.1 brightness)
- Increased contrast (1.2x)
- Warm color tinting

### Dramatic Effect
Creates high-impact visuals with:
- Enhanced saturation (1.4x)
- Increased contrast (1.3x)
- Adjusted gamma (0.8)
- Slightly darker for mood

### Monochrome Effect
Classic black and white with:
- Zero saturation
- Subtle contrast boost
- Slight brightness increase

## 📊 Database Features

### Job Tracking
- Real-time progress updates
- Processing start/end timestamps
- Error message logging
- File size and duration tracking
- Video resolution detection

### Batch Management
- Total job count tracking
- Completed/failed job counters
- Overall batch progress
- Batch naming and descriptions

### User Association
- Optional user ID linking
- Job history per user
- Template sharing capabilities

## ☁️ Cloud Storage (Future Ready)

The API is ready for cloud storage integration:

### Environment Variables
```bash
# Google Cloud Storage
CLOUD_STORAGE_PROVIDER=google
GOOGLE_CLOUD_PROJECT_ID=your-project
GOOGLE_CLOUD_KEY_FILENAME=path/to/key.json
GOOGLE_CLOUD_BUCKET_NAME=your-bucket

# AWS S3
CLOUD_STORAGE_PROVIDER=aws
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket

# Local Storage (default)
CLOUD_STORAGE_PROVIDER=local
```

## 📈 Performance & Monitoring

### System Metrics
- Processing time tracking
- File size monitoring
- Queue length management
- Error rate tracking
- Resource usage monitoring

### Progress Tracking
- Real-time job progress (0-100%)
- Batch completion tracking
- Individual file status
- Error handling and recovery

## 🔄 Migration from v1

The enhanced API maintains full backward compatibility:
- Original API available at `/api/v1/*`
- Enhanced API available at `/api/v2/*`
- Same basic parameters supported
- Enhanced features in v2 only

## 🛠️ Development Scripts

```bash
# Development
npm run dev:enhanced        # Start enhanced server in development
npm run dev                 # Start original server in development

# Production
npm run build              # Build TypeScript
npm run start:enhanced     # Start enhanced server in production
npm run start              # Start original server in production

# Watch mode
npm run watch:enhanced     # Auto-restart enhanced server on changes
npm run watch              # Auto-restart original server on changes
```

## 📦 Architecture Improvements

### Code Organization
- **Enhanced controller** - Database-integrated processing logic
- **Video processor service** - Advanced FFmpeg integration with color effects
- **Database service** - Prisma client management
- **Cloud storage service** - Multi-provider storage abstraction
- **Enhanced routes** - New API endpoints with validation

### Error Handling
- Comprehensive error logging
- Graceful failure recovery
- Database transaction support
- Progress tracking during failures

### Scalability
- Database persistence for job queuing
- Batch processing for efficiency
- Cloud storage for file management
- Metrics collection for monitoring

## 🎯 Future Enhancements

### Planned Features
- **User authentication** - JWT-based API authentication
- **Webhook notifications** - Real-time job completion alerts
- **Advanced templates** - Shareable processing configurations
- **Queue management** - Priority-based job processing
- **Analytics dashboard** - Visual processing statistics
- **Multi-resolution output** - Generate multiple video sizes
- **Watermark support** - Brand overlay capabilities
- **Audio processing** - Enhanced audio effects and filters

### Cloud Integration
- **Auto-scaling** - Dynamic resource allocation
- **CDN integration** - Fast global video delivery
- **Backup strategies** - Multi-region data protection
- **Performance optimization** - Edge computing for processing

---

## 🏆 Summary of Achievements

✅ **Database Integration** - Full PostgreSQL integration with Prisma ORM  
✅ **Enhanced Color Effects** - Python-inspired color manipulation  
✅ **Batch Processing** - Multi-file processing capabilities  
✅ **Progress Tracking** - Real-time job monitoring  
✅ **Cloud Storage Ready** - Google Cloud/AWS integration prepared  
✅ **Comprehensive API** - Full documentation and examples  
✅ **Backward Compatibility** - Original API still functional  
✅ **Advanced Monitoring** - System metrics and health checks  

The enhanced Variats API now provides enterprise-grade video processing capabilities with persistence, advanced effects, and scalable architecture!
