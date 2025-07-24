import { EventEmitter } from 'events';
import { VariantOptions, ProcessingJob } from '../types';
export declare class VariantProcessor extends EventEmitter {
    private jobs;
    processVideo(inputPath: string, options: VariantOptions): Promise<ProcessingJob>;
    createVariantJob(inputPath: string, outputPath: string, options?: VariantOptions): Promise<string>;
    private processVideoInternal;
    getJob(jobId: string): ProcessingJob | undefined;
    getAllJobs(): ProcessingJob[];
    deleteJob(jobId: string): boolean;
    private generateRandomMetadata;
    processWithRandomMetadata(inputPath: string, baseOptions?: Partial<VariantOptions>): Promise<ProcessingJob>;
}
//# sourceMappingURL=index.d.ts.map