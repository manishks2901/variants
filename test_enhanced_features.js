#!/usr/bin/env node

/**
 * Test script for enhanced video processing features
 * Tests: Text overlay, Zoom, Playback Speed, and Vivid Filter
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_BASE = 'http://localhost:3000/api/variants';

// Test configuration
const testConfig = {
  inputVideo: '/workspaces/variats/test_video.mp4',
  options: {
    introText: 'Welcome to my enhanced video!',
    outroText: 'Subscribe for more content!',
    zoom: 1.25,
    playbackSpeed: 1.25,
    filter: 'vivid',
    volumeDb: 1.5,
    jitter: 1.5,
    rotate: 0.5,
    metadata: {
      title: 'Enhanced_Video_Test',
      description: 'Test_video_with_text_zoom_speed_and_vivid_filter',
      creator: 'Video_Enhancement_Test',
      genre: 'Test_Content',
      date: '2025'
    }
  }
};

async function testEnhancedProcessing() {
  console.log('🎬 Testing Enhanced Video Processing Features');
  console.log('='.repeat(50));
  
  try {
    // Check if input video exists
    if (!fs.existsSync(testConfig.inputVideo)) {
      console.error(`❌ Input video not found: ${testConfig.inputVideo}`);
      console.log('Please ensure test_video.mp4 exists in the workspace root');
      return;
    }

    console.log('📹 Input video found:', testConfig.inputVideo);
    console.log('⚙️  Processing options:');
    console.log('   • Intro Text:', testConfig.options.introText);
    console.log('   • Outro Text:', testConfig.options.outroText);
    console.log('   • Zoom:', testConfig.options.zoom + 'x');
    console.log('   • Playback Speed:', testConfig.options.playbackSpeed + 'x');
    console.log('   • Visual Filter:', testConfig.options.filter);
    console.log('   • Volume Boost:', testConfig.options.volumeDb + 'dB');
    console.log('   • Jitter:', testConfig.options.jitter + 'px');
    console.log('   • Rotation:', testConfig.options.rotate + '°');
    
    console.log('\n🚀 Starting video processing...');
    
    // Start processing
    const response = await axios.post(`${API_BASE}/process`, testConfig);
    
    if (response.data.success) {
      const jobId = response.data.data.jobId;
      console.log('✅ Processing started successfully!');
      console.log('📋 Job ID:', jobId);
      
      // Monitor progress
      await monitorJob(jobId);
      
    } else {
      console.error('❌ Processing failed:', response.data.error);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

async function monitorJob(jobId) {
  console.log('\n📊 Monitoring job progress...');
  
  const maxAttempts = 60; // 5 minutes max
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    try {
      const response = await axios.get(`${API_BASE}/job/${jobId}`);
      const job = response.data.data;
      
      console.log(`⏳ Progress: ${job.progress || 0}% | Status: ${job.status}`);
      
      if (job.status === 'completed') {
        console.log('✅ Processing completed successfully!');
        console.log('📁 Output file:', job.outputVideo);
        
        // Check if output file exists
        if (fs.existsSync(job.outputVideo)) {
          const stats = fs.statSync(job.outputVideo);
          console.log('📊 Output file size:', (stats.size / 1024 / 1024).toFixed(2) + ' MB');
          console.log('🎉 Enhanced video processing test PASSED!');
        } else {
          console.error('❌ Output file not found:', job.outputVideo);
        }
        break;
      } else if (job.status === 'failed') {
        console.error('❌ Processing failed:', job.error);
        break;
      }
      
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      attempts++;
      
    } catch (error) {
      console.error('❌ Error checking job status:', error.message);
      break;
    }
  }
  
  if (attempts >= maxAttempts) {
    console.warn('⚠️  Job monitoring timed out');
  }
}

async function testFilterVariants() {
  console.log('\n🎨 Testing Different Filter Effects');
  console.log('='.repeat(50));
  
  const filters = ['vivid', 'vintage', 'sepia', 'grayscale', 'cool', 'warm', 'dramatic'];
  
  for (const filter of filters) {
    console.log(`\n🎭 Testing filter: ${filter}`);
    
    try {
      const filterConfig = {
        ...testConfig,
        options: {
          ...testConfig.options,
          filter: filter,
          introText: `Testing ${filter} filter!`,
          metadata: {
            ...testConfig.options.metadata,
            title: `Filter_Test_${filter}`,
            description: `Video_with_${filter}_filter_applied`
          }
        }
      };
      
      const response = await axios.post(`${API_BASE}/process`, filterConfig);
      
      if (response.data.success) {
        console.log(`✅ ${filter} filter test started - Job ID: ${response.data.data.jobId}`);
      } else {
        console.error(`❌ ${filter} filter test failed:`, response.data.error);
      }
      
    } catch (error) {
      console.error(`❌ Error testing ${filter} filter:`, error.message);
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Main execution
async function main() {
  console.log('🧪 Enhanced Video Processing Test Suite');
  console.log('📅 Date:', new Date().toISOString());
  console.log('');
  
  // Test main enhanced processing
  await testEnhancedProcessing();
  
  // Wait a bit before testing filters
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Test different filters
  await testFilterVariants();
  
  console.log('\n✨ Test suite completed!');
  console.log('Check the outputs/ directory for generated videos');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testEnhancedProcessing, testFilterVariants };
