# Ambient Audio Tracks Setup

This directory should contain ambient audio tracks used for video variant generation.

## Required Files:

1. **wind.mp3** - Low-volume wind/breeze sound
2. **hum.mp3** - Subtle electrical/mechanical hum
3. **whitenoise.mp3** - Soft white noise background
4. **rain.mp3** - Gentle rain ambient sound
5. **ocean.mp3** - Ocean waves/water ambient sound

## Specifications:

- **Format**: MP3 or WAV
- **Duration**: At least 30 seconds (preferably 1-2 minutes for seamless looping)
- **Volume Level**: Very low (-30 to -20 dB) - the system will further reduce volume
- **Sample Rate**: 44.1kHz or 48kHz
- **Bitrate**: 128kbps minimum for MP3

## Usage:

These tracks are automatically mixed with the original video audio at very low volumes (5-15% of original volume) to:

1. **Avoid Audio Fingerprinting**: Subtle audio changes help avoid detection
2. **Enhance Atmosphere**: Add depth to videos without being intrusive
3. **Create Variants**: Each variant uses different ambient tracks

## Important Notes:

- Tracks should NOT be silent (0% volume) as this can still be detected by fingerprinting
- Keep ambient volume between 5-15% of original audio
- Ensure tracks are royalty-free or you have proper licensing
- Tracks should loop seamlessly for longer videos

## Generating Ambient Tracks:

You can generate these using:
- **Audacity**: Generate → Noise → Type selection
- **Online Generators**: Search for "ambient noise generator"
- **AI Tools**: Use AI to generate subtle background sounds
- **Record Naturally**: Record actual wind, rain, etc. at low volumes

## Example Command to Create White Noise with FFmpeg:

```bash
ffmpeg -f lavfi -i anoisesrc=duration=60:color=white:sample_rate=44100:amplitude=0.1 -c:a mp3 -b:a 128k whitenoise.mp3
```

This creates a 60-second white noise track at low amplitude.
