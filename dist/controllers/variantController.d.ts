import { Request, Response } from 'express';
export declare class VariantController {
    private processor;
    constructor();
    processVariant(req: Request, res: Response): Promise<void>;
    uploadAndProcess(req: Request, res: Response): Promise<void>;
    processBatchVariants(req: Request, res: Response): Promise<void>;
    getJobStatus(req: Request, res: Response): Promise<void>;
    getAllJobs(req: Request, res: Response): Promise<void>;
    deleteJob(req: Request, res: Response): Promise<void>;
    downloadVariant(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=variantController.d.ts.map