# Variats

Video variant processing API with zoom, audio filters, ambient tracks, and metadata randomization.

## Features

- **Video Processing**: Apply zoom, jitter, rotation effects to videos
- **Audio Enhancement**: Volume adjustment and ambient track mixing
- **Text Overlays**: Add intro and outro text overlays
- **Metadata Randomization**: Generate random metadata for content variants
- **Batch Processing**: Process multiple variants simultaneously
- **Job Management**: Track processing status and manage jobs

## API Endpoints

- `POST /api/variants/process` - Process variant with file path
- `POST /api/variants/upload` - Upload and process video file
- `POST /api/variants/batch` - Process multiple variants
- `GET /api/variants/job/:jobId` - Get job status
- `GET /api/variants/jobs` - Get all jobs
- `DELETE /api/variants/job/:jobId` - Delete job
- `GET /api/variants/download/:jobId` - Download completed variant
- `GET /health` - Health check endpoint
- `GET /api` - API documentation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- FFmpeg installed on your system
- TypeScript

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create required directories:
   ```bash
   mkdir -p uploads outputs assets/ambient temp
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

### Usage

#### Upload and Process a Video

```bash
curl -X POST \
  -F "video=@your-video.mp4" \
  -F "options={\"zoom\":1.1,\"rotate\":2}" \
  http://localhost:3000/api/variants/upload
```

#### Process with File Path

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "inputVideo": "/path/to/video.mp4",
    "options": {
      "zoom": 1.05,
      "jitter": 5,
      "rotate": 1,
      "volumeDb": 2,
      "introText": "Welcome!",
      "outroText": "Thanks for watching!"
    }
  }' \
  http://localhost:3000/api/variants/process
```

#### Check Job Status

```bash
curl http://localhost:3000/api/variants/job/YOUR_JOB_ID
```

#### Download Completed Variant

```bash
curl -O http://localhost:3000/api/variants/download/YOUR_JOB_ID
```

## Configuration Options

### Variant Options

- `zoom` - Zoom factor (default: 1.0 + random 0-0.15)
- `jitter` - Pixel jitter amount (default: random 2-10)
- `rotate` - Rotation in degrees (default: random -2 to 2)
- `volumeDb` - Volume adjustment in dB (default: random -2 to 2)
- `ambientTrack` - Path to ambient audio file
- `introText` - Text overlay for video start (3 seconds)
- `outroText` - Text overlay for video end (4 seconds)
- `metadata` - Custom metadata object

## File Structure

```
src/
├── index.ts              # Main application entry point
├── controllers/          # Request handlers
│   └── variantController.ts
├── routes/               # Route definitions
│   └── index.ts
├── types/                # TypeScript type definitions
│   └── index.ts
└── variantcontroller/    # Video processing logic
    └── index.ts
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Development

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run watch` - Watch mode with nodemon

## License

MIT
