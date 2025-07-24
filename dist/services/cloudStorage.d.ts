export interface CloudStorageConfig {
    provider: 'google' | 'aws' | 'local';
    googleCloud?: {
        projectId: string;
        keyFilename: string;
        bucketName: string;
    };
    aws?: {
        accessKeyId: string;
        secretAccessKey: string;
        region: string;
        bucketName: string;
    };
}
export declare class CloudStorageService {
    private config;
    private googleStorage?;
    private s3?;
    constructor(config: CloudStorageConfig);
    private initializeProvider;
    uploadFile(localFilePath: string, remoteFileName: string): Promise<string>;
    private uploadToGoogleCloud;
    private uploadToAWS;
    private moveToLocalStorage;
    deleteFile(remoteFileName: string): Promise<void>;
    private deleteFromGoogleCloud;
    private deleteFromAWS;
    private deleteFromLocalStorage;
    getFileUrl(remoteFileName: string): Promise<string>;
    private getGoogleCloudUrl;
    private getAWSUrl;
    private getContentType;
    testConnection(): Promise<boolean>;
}
export declare function createCloudStorageFromEnv(): CloudStorageService;
//# sourceMappingURL=cloudStorage.d.ts.map