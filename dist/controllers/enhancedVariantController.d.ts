import { Request, Response } from 'express';
export declare class EnhancedVariantController {
    static createVideoJob(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    private static processVideoVariantsAsync;
    static getJobStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static downloadVariant(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static downloadVideo(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static createBatchJob(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    private static processBatchAsync;
    static getBatchStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static listJobs(req: Request, res: Response): Promise<void>;
    static getColorPresets(req: Request, res: Response): Promise<void>;
    static healthCheck(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=enhancedVariantController.d.ts.map