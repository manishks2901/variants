import { EventEmitter } from 'events';
import { VariantOptions, ProcessingJob } from '../types';
export declare class VariantProcessor extends EventEmitter {
    private jobs;
    private readonly ambientTracks;
    constructor();
    private ensureDirectories;
    createVariantJob(inputVideo: string, outputVideo: string, options?: VariantOptions): Promise<string>;
    private generateRandomOptions;
    private processVariantAsync;
    private processVariant;
    getJob(jobId: string): ProcessingJob | undefined;
    getAllJobs(): ProcessingJob[];
    deleteJob(jobId: string): boolean;
    private getRandomAmbientTrack;
    private getRandomIntroText;
    private getRandomOutroText;
    private generateRandomMetadata;
}
//# sourceMappingURL=index.d.ts.map