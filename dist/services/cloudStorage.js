"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorageService = void 0;
exports.createCloudStorageFromEnv = createCloudStorageFromEnv;
const storage_1 = require("@google-cloud/storage");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class CloudStorageService {
    constructor(config) {
        this.config = config;
        this.initializeProvider();
    }
    initializeProvider() {
        switch (this.config.provider) {
            case 'google':
                if (this.config.googleCloud) {
                    this.googleStorage = new storage_1.Storage({
                        projectId: this.config.googleCloud.projectId,
                        keyFilename: this.config.googleCloud.keyFilename,
                    });
                }
                break;
            case 'aws':
                if (this.config.aws) {
                    aws_sdk_1.default.config.update({
                        accessKeyId: this.config.aws.accessKeyId,
                        secretAccessKey: this.config.aws.secretAccessKey,
                        region: this.config.aws.region,
                    });
                    this.s3 = new aws_sdk_1.default.S3();
                }
                break;
            case 'local':
            default:
                // Local storage - no initialization needed
                break;
        }
    }
    async uploadFile(localFilePath, remoteFileName) {
        switch (this.config.provider) {
            case 'google':
                return this.uploadToGoogleCloud(localFilePath, remoteFileName);
            case 'aws':
                return this.uploadToAWS(localFilePath, remoteFileName);
            case 'local':
            default:
                return this.moveToLocalStorage(localFilePath, remoteFileName);
        }
    }
    async uploadToGoogleCloud(localFilePath, remoteFileName) {
        if (!this.googleStorage || !this.config.googleCloud) {
            throw new Error('Google Cloud Storage not configured');
        }
        const bucket = this.googleStorage.bucket(this.config.googleCloud.bucketName);
        const file = bucket.file(remoteFileName);
        await bucket.upload(localFilePath, {
            destination: remoteFileName,
            metadata: {
                cacheControl: 'public, max-age=31536000',
            },
        });
        // Make the file publicly accessible (optional)
        await file.makePublic();
        return `https://storage.googleapis.com/${this.config.googleCloud.bucketName}/${remoteFileName}`;
    }
    async uploadToAWS(localFilePath, remoteFileName) {
        if (!this.s3 || !this.config.aws) {
            throw new Error('AWS S3 not configured');
        }
        const fileContent = fs_1.default.readFileSync(localFilePath);
        const params = {
            Bucket: this.config.aws.bucketName,
            Key: remoteFileName,
            Body: fileContent,
            ContentType: this.getContentType(localFilePath),
            ACL: 'public-read', // Make publicly accessible
        };
        const result = await this.s3.upload(params).promise();
        return result.Location;
    }
    async moveToLocalStorage(localFilePath, remoteFileName) {
        const storageDir = 'cloud-storage';
        if (!fs_1.default.existsSync(storageDir)) {
            fs_1.default.mkdirSync(storageDir, { recursive: true });
        }
        const destinationPath = path_1.default.join(storageDir, remoteFileName);
        fs_1.default.copyFileSync(localFilePath, destinationPath);
        return `/downloads/cloud-storage/${remoteFileName}`;
    }
    async deleteFile(remoteFileName) {
        switch (this.config.provider) {
            case 'google':
                await this.deleteFromGoogleCloud(remoteFileName);
                break;
            case 'aws':
                await this.deleteFromAWS(remoteFileName);
                break;
            case 'local':
            default:
                await this.deleteFromLocalStorage(remoteFileName);
                break;
        }
    }
    async deleteFromGoogleCloud(remoteFileName) {
        if (!this.googleStorage || !this.config.googleCloud) {
            throw new Error('Google Cloud Storage not configured');
        }
        const bucket = this.googleStorage.bucket(this.config.googleCloud.bucketName);
        await bucket.file(remoteFileName).delete();
    }
    async deleteFromAWS(remoteFileName) {
        if (!this.s3 || !this.config.aws) {
            throw new Error('AWS S3 not configured');
        }
        const params = {
            Bucket: this.config.aws.bucketName,
            Key: remoteFileName,
        };
        await this.s3.deleteObject(params).promise();
    }
    async deleteFromLocalStorage(remoteFileName) {
        const filePath = path_1.default.join('cloud-storage', remoteFileName);
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlinkSync(filePath);
        }
    }
    async getFileUrl(remoteFileName) {
        switch (this.config.provider) {
            case 'google':
                return this.getGoogleCloudUrl(remoteFileName);
            case 'aws':
                return this.getAWSUrl(remoteFileName);
            case 'local':
            default:
                return `/downloads/cloud-storage/${remoteFileName}`;
        }
    }
    getGoogleCloudUrl(remoteFileName) {
        if (!this.config.googleCloud) {
            throw new Error('Google Cloud Storage not configured');
        }
        return `https://storage.googleapis.com/${this.config.googleCloud.bucketName}/${remoteFileName}`;
    }
    getAWSUrl(remoteFileName) {
        if (!this.config.aws) {
            throw new Error('AWS S3 not configured');
        }
        return `https://${this.config.aws.bucketName}.s3.${this.config.aws.region}.amazonaws.com/${remoteFileName}`;
    }
    getContentType(filePath) {
        const ext = path_1.default.extname(filePath).toLowerCase();
        const contentTypes = {
            '.mp4': 'video/mp4',
            '.avi': 'video/x-msvideo',
            '.mov': 'video/quicktime',
            '.wmv': 'video/x-ms-wmv',
            '.flv': 'video/x-flv',
            '.webm': 'video/webm',
            '.mkv': 'video/x-matroska',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
        };
        return contentTypes[ext] || 'application/octet-stream';
    }
    async testConnection() {
        try {
            switch (this.config.provider) {
                case 'google':
                    if (!this.googleStorage || !this.config.googleCloud)
                        return false;
                    const bucket = this.googleStorage.bucket(this.config.googleCloud.bucketName);
                    await bucket.exists();
                    return true;
                case 'aws':
                    if (!this.s3 || !this.config.aws)
                        return false;
                    await this.s3.headBucket({ Bucket: this.config.aws.bucketName }).promise();
                    return true;
                case 'local':
                default:
                    return true; // Local storage always available
            }
        }
        catch (error) {
            console.error('Cloud storage connection test failed:', error);
            return false;
        }
    }
}
exports.CloudStorageService = CloudStorageService;
// Factory function to create cloud storage service from environment variables
function createCloudStorageFromEnv() {
    const provider = process.env.CLOUD_STORAGE_PROVIDER || 'local';
    const config = {
        provider,
    };
    if (provider === 'google') {
        config.googleCloud = {
            projectId: process.env.GOOGLE_CLOUD_PROJECT_ID || '',
            keyFilename: process.env.GOOGLE_CLOUD_KEY_FILENAME || '',
            bucketName: process.env.GOOGLE_CLOUD_BUCKET_NAME || '',
        };
    }
    else if (provider === 'aws') {
        config.aws = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
            region: process.env.AWS_REGION || 'us-east-1',
            bucketName: process.env.AWS_BUCKET_NAME || '',
        };
    }
    return new CloudStorageService(config);
}
//# sourceMappingURL=cloudStorage.js.map