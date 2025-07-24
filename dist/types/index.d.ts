export interface VariantRequest {
    inputVideo: string;
    outputVideo?: string;
    options?: VariantOptions;
}
export interface VariantOptions {
    zoom?: number;
    jitter?: number;
    rotate?: number;
    volumeDb?: number;
    speed?: number;
    colorFilter?: 'vivid' | 'vibrant' | 'saturated' | 'contrast' | 'none';
    ambientTrack?: string;
    introText?: string;
    outroText?: string;
    metadata?: Record<string, string>;
}
export interface ProcessingJob {
    id: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    inputVideo: string;
    outputVideo: string;
    options: VariantOptions;
    createdAt: Date;
    completedAt?: Date;
    error?: string;
    progress?: number;
}
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
export interface BatchProcessRequest {
    inputVideo: string;
    count?: number;
    baseOptions?: VariantOptions;
}
//# sourceMappingURL=index.d.ts.map