# Enhanced Video Variant Generator

This system generates **5 unique video variants** from a single input video with advanced processing features to avoid fingerprinting and create engaging content variations.

## 🎯 Key Features

### 1. **Automatic 5-Variant Generation**
When you upload one video, the system automatically creates 5 different variants with:
- Different zoom levels (3-8% per variant)
- Unique rotation angles (0.3-1.5 degrees)
- Varying jitter/shake effects (0.3-1.5 intensity)
- Different color presets applied

### 2. **Volume & Audio Enhancements**
- **Volume Adjustments**: ±0.5 to ±1.5 dB changes per variant
- **Ambient Track Overlay**: Low-volume background audio (5-15% volume)
  - Wind sounds
  - Electrical hum
  - White noise
  - Rain ambience
  - Ocean waves
- **Anti-Fingerprinting**: Never 0% volume to avoid detection

### 3. **Intro/Outro Text Overlays**
Each variant includes:
- **Custom intro text** (2-2.5 seconds)
- **Call-to-action outro** (2-2.5 seconds)
- Different fonts, colors, and positions per variant
- Examples: "Enhanced Video", "Premium Content", "Must Watch!"

### 4. **Metadata Randomization**
- **Random titles** per variant
- **Unique artist/creator names**
- **Timestamp-based comments**
- **Different encoder signatures**
- **Prevents content fingerprinting**

### 5. **Advanced Color Presets**
- **Vintage**: Warm, nostalgic with sepia tones
- **Vibrant**: Enhanced saturation and contrast
- **Monochrome**: Stylish black and white
- **Warm**: Orange/yellow temperature
- **Cool**: Blue temperature tint
- **Dramatic**: High contrast with deep shadows

## 🚀 API Endpoints

### Process Single Video (Creates 5 Variants)
```http
POST /api/enhanced/process
Content-Type: multipart/form-data

{
  "video": [video file],
  "preset": "vibrant",
  "text": "Custom overlay text",
  "audioEffects": {
    "volumeChange": 1.0,
    "ambientTrack": "wind",
    "ambientVolume": 0.08
  },
  "introOutro": {
    "intro": {
      "text": "Welcome!",
      "duration": 2,
      "fontSize": 48,
      "fontColor": "white"
    },
    "outro": {
      "text": "Subscribe!",
      "duration": 2,
      "cta": "Like & Share"
    }
  }
}
```

### Get Job Status (All 5 Variants)
```http
GET /api/enhanced/job/{jobId}
```

**Response:**
```json
{
  "jobId": "uuid",
  "status": "completed",
  "progress": 100,
  "totalVariants": 5,
  "variants": [
    {
      "id": "variant-uuid",
      "name": "variant_0",
      "variantIndex": 0,
      "downloadUrl": "/api/enhanced/job/{jobId}/variants/{variantId}/download",
      "fileSize": 15728640,
      "duration": 30.5,
      "resolution": "1920x1080"
    }
    // ... 4 more variants
  ]
}
```

### Download Specific Variant
```http
GET /api/enhanced/job/{jobId}/variants/{variantId}/download
```

### Get Available Presets & Features
```http
GET /api/enhanced/presets
```

## 📊 Variant Breakdown

| Variant | Zoom | Jitter | Rotation | Preset | Ambient | Intro Text |
|---------|------|--------|----------|--------|---------|------------|
| 0 | 1.05x | 0.5 | 0.5° | Warm | Wind | "Enhanced Video" |
| 1 | 1.08x | 1.0 | -0.8° | Vibrant | Hum | "Premium Content" |
| 2 | 1.03x | 0.8 | 1.2° | Cool | White Noise | "Exclusive Video" |
| 3 | 1.06x | 1.5 | -1.0° | Dramatic | Rain | "Must Watch!" |
| 4 | 1.04x | 0.3 | 0.3° | Vintage | Ocean | "Classic Style" |

## 🎨 Customization Options

### Audio Effects
```json
{
  "audioEffects": {
    "volumeChange": 1.5,        // -2 to +2 dB
    "ambientTrack": "rain",     // wind, hum, whitenoise, rain, ocean
    "ambientVolume": 0.07       // 0.05 to 0.15 (5-15% volume)
  }
}
```

### Intro/Outro Configuration
```json
{
  "introOutro": {
    "intro": {
      "text": "Your Text Here",
      "duration": 2.5,          // seconds
      "fontSize": 48,
      "fontColor": "yellow",
      "backgroundColor": "black@0.6"
    },
    "outro": {
      "text": "Thanks for watching!",
      "duration": 2.0,
      "cta": "Subscribe for more!"
    }
  }
}
```

### Metadata Randomization
```json
{
  "metadataOptions": {
    "randomizeMetadata": true,
    "customTitle": "Custom Video Title",
    "customArtist": "Your Channel"
  }
}
```

## 🔧 Setup Requirements

### 1. Ambient Audio Files
Place these files in `assets/ambient/`:
- `wind.mp3` - Wind/breeze sounds
- `hum.mp3` - Electrical hum
- `whitenoise.mp3` - White noise
- `rain.mp3` - Rain sounds
- `ocean.mp3` - Ocean waves

### 2. FFmpeg Installation
```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# macOS
brew install ffmpeg

# Windows
# Download from https://ffmpeg.org/download.html
```

### 3. Dependencies
```bash
npm install fluent-ffmpeg @types/fluent-ffmpeg
```

## 📈 Performance & Scalability

- **Processing Time**: 2-5 minutes for 5 variants (depends on video length)
- **Concurrent Jobs**: Supports multiple jobs simultaneously
- **Database Storage**: PostgreSQL with Prisma ORM
- **Progress Tracking**: Real-time progress updates
- **Error Handling**: Comprehensive error recovery

## 🛡️ Anti-Fingerprinting Features

1. **Volume Variations**: Never uses 0% volume
2. **Metadata Randomization**: Unique metadata per variant
3. **Visual Variations**: Different zoom, rotation, jitter
4. **Audio Mixing**: Subtle ambient track overlays
5. **Color Adjustments**: Different presets per variant
6. **Temporal Changes**: Intro/outro variations

## 🎯 Use Cases

- **Content Creation**: Generate multiple versions for A/B testing
- **Social Media**: Different variants for different platforms
- **Marketing**: Multiple versions to avoid ad fatigue
- **Backup Content**: Always have alternative versions ready
- **SEO**: Different metadata for better search coverage

## 📝 Example Usage

```javascript
// Upload video and get 5 variants
const formData = new FormData();
formData.append('video', videoFile);
formData.append('preset', 'vibrant');

const response = await fetch('/api/enhanced/process', {
  method: 'POST',
  body: formData
});

const { jobId } = await response.json();

// Check status
const status = await fetch(`/api/enhanced/job/${jobId}`);
const jobData = await status.json();

// Download all variants
jobData.variants.forEach((variant, index) => {
  const downloadUrl = variant.downloadUrl;
  // Download each variant...
});
```

This system provides professional-grade video variant generation with comprehensive anti-fingerprinting features and customizable processing options.
