"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantController = void 0;
const variantcontroller_1 = require("../variantcontroller");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
class VariantController {
    constructor() {
        this.processor = new variantcontroller_1.VariantProcessor();
    }
    async processVariant(req, res) {
        try {
            const { inputVideo, outputVideo, options } = req.body;
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
        }
        catch (error) {
            console.error('Error in processVariant:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async uploadAndProcess(req, res) {
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
        }
        catch (error) {
            console.error('Error in uploadAndProcess:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async processBatchVariants(req, res) {
        try {
            const { inputVideo, count = 3, baseOptions } = req.body;
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
            const jobIds = [];
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
        }
        catch (error) {
            console.error('Error in processBatchVariants:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async getJobStatus(req, res) {
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
        }
        catch (error) {
            console.error('Error in getJobStatus:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async getAllJobs(req, res) {
        try {
            const jobs = this.processor.getAllJobs();
            res.json({
                success: true,
                data: jobs
            });
        }
        catch (error) {
            console.error('Error in getAllJobs:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async deleteJob(req, res) {
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
        }
        catch (error) {
            console.error('Error in deleteJob:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
    async downloadVariant(req, res) {
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
        }
        catch (error) {
            console.error('Error in downloadVariant:', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    }
}
exports.VariantController = VariantController;
//# sourceMappingURL=variantController.js.map