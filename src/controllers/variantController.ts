import { Request, Response } from 'express';
import { VariantProcessor } from '../variantcontroller';
import { VariantRequest, BatchProcessRequest, ApiResponse } from '../types';
import * as path from 'path';
import * as fs from 'fs';

export class VariantController {
  private processor: VariantProcessor;

  constructor() {
    this.processor = new VariantProcessor();
  }

  async processVariant(req: Request, res: Response): Promise<void> {
    try {
      const { inputVideo, outputVideo, options }: VariantRequest = req.body;

      if (!inputVideo) {
        res.status(400).json({
          success: false,
          error: 'inputVideo is required'
        });
        return;
      }

      if (!fs.existsSync(inputVideo)) {
        res.status(404).json({
          success: false,
          error: 'Input video file not found'
        });
        return;
      }

      const inputBaseName = path.basename(inputVideo, path.extname(inputVideo)); 
      const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');
      const finalOutputVideo = outputVideo || path.resolve(process.cwd(), 'outputs', `variant_${Date.now()}_${sanitizedBaseName}.mp4`);
      
      const jobId = await this.processor.createVariantJob(inputVideo, finalOutputVideo, options);

      res.json({
        success: true,
        data: {
          jobId,
          message: 'Variant processing started'
        }
      });
    } catch (error) {
      console.error('Error in processVariant:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async uploadAndProcess(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({
          success: false,
          error: 'No video file uploaded'
        });
        return;
      }

      const inputVideo = req.file.path;
      const inputBaseName = path.basename(inputVideo, path.extname(inputVideo));
      const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');
      const outputVideo = path.resolve(process.cwd(), 'outputs', `variant_${Date.now()}_${sanitizedBaseName}.mp4`);
      const options = req.body.options ? JSON.parse(req.body.options) : {};

      const jobId = await this.processor.createVariantJob(inputVideo, outputVideo, options);

      res.json({
        success: true,
        data: {
          jobId,
          message: 'File uploaded and variant processing started'
        }
      });
    } catch (error) {
      console.error('Error in uploadAndProcess:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async processBatchVariants(req: Request, res: Response): Promise<void> {
    try {
      const { inputVideo, count = 3, baseOptions }: BatchProcessRequest = req.body;

      if (!inputVideo) {
        res.status(400).json({
          success: false,
          error: 'inputVideo is required'
        });
        return;
      }

      if (!fs.existsSync(inputVideo)) {
        res.status(404).json({
          success: false,
          error: 'Input video file not found'
        });
        return;
      }

      const jobIds: string[] = [];
      const inputBaseName = path.basename(inputVideo, path.extname(inputVideo));
      const sanitizedBaseName = inputBaseName.replace(/[^a-zA-Z0-9_-]/g, '_');
      
      for (let i = 0; i < count; i++) {
        const outputVideo = path.resolve(process.cwd(), 'outputs', `batch_variant_${i + 1}_${Date.now()}_${sanitizedBaseName}.mp4`);
        const jobId = await this.processor.createVariantJob(inputVideo, outputVideo, baseOptions);
        jobIds.push(jobId);
      }

      res.json({
        success: true,
        data: {
          jobIds,
          message: `${count} batch variants processing started`
        }
      });
    } catch (error) {
      console.error('Error in processBatchVariants:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async getJobStatus(req: Request, res: Response): Promise<void> {
    try {
      const { jobId } = req.params;
      const job = this.processor.getJob(jobId);

      if (!job) {
        res.status(404).json({
          success: false,
          error: 'Job not found'
        });
        return;
      }

      res.json({
        success: true,
        data: job
      });
    } catch (error) {
      console.error('Error in getJobStatus:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async getAllJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = this.processor.getAllJobs();
      
      res.json({
        success: true,
        data: jobs
      });
    } catch (error) {
      console.error('Error in getAllJobs:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async deleteJob(req: Request, res: Response): Promise<void> {
    try {
      const { jobId } = req.params;
      const deleted = this.processor.deleteJob(jobId);

      if (!deleted) {
        res.status(404).json({
          success: false,
          error: 'Job not found'
        });
        return;
      }

      res.json({
        success: true,
        data: {
          message: 'Job deleted successfully'
        }
      });
    } catch (error) {
      console.error('Error in deleteJob:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }

  async downloadVariant(req: Request, res: Response): Promise<void> {
    try {
      const { jobId } = req.params;
      const job = this.processor.getJob(jobId);

      if (!job) {
        res.status(404).json({
          success: false,
          error: 'Job not found'
        });
        return;
      }

      if (job.status !== 'completed') {
        res.status(400).json({
          success: false,
          error: `Job is not completed. Current status: ${job.status}`
        });
        return;
      }

      if (!fs.existsSync(job.outputVideo)) {
        res.status(404).json({
          success: false,
          error: 'Output video file not found'
        });
        return;
      }

      const filename = path.basename(job.outputVideo);
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'video/mp4');
      
      const fileStream = fs.createReadStream(job.outputVideo);
      fileStream.pipe(res);
    } catch (error) {
      console.error('Error in downloadVariant:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      });
    }
  }
}
