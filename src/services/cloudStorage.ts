import { Storage } from '@google-cloud/storage';
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';

// Cloud storage configuration interface
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

export class CloudStorageService {
  private config: CloudStorageConfig;
  private googleStorage?: Storage;
  private s3?: AWS.S3;

  constructor(config: CloudStorageConfig) {
    this.config = config;
    this.initializeProvider();
  }

  private initializeProvider() {
    switch (this.config.provider) {
      case 'google':
        if (this.config.googleCloud) {
          this.googleStorage = new Storage({
            projectId: this.config.googleCloud.projectId,
            keyFilename: this.config.googleCloud.keyFilename,
          });
        }
        break;
      case 'aws':
        if (this.config.aws) {
          AWS.config.update({
            accessKeyId: this.config.aws.accessKeyId,
            secretAccessKey: this.config.aws.secretAccessKey,
            region: this.config.aws.region,
          });
          this.s3 = new AWS.S3();
        }
        break;
      case 'local':
      default:
        // Local storage - no initialization needed
        break;
    }
  }

  async uploadFile(localFilePath: string, remoteFileName: string): Promise<string> {
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

  private async uploadToGoogleCloud(localFilePath: string, remoteFileName: string): Promise<string> {
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

  private async uploadToAWS(localFilePath: string, remoteFileName: string): Promise<string> {
    if (!this.s3 || !this.config.aws) {
      throw new Error('AWS S3 not configured');
    }

    const fileContent = fs.readFileSync(localFilePath);

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

  private async moveToLocalStorage(localFilePath: string, remoteFileName: string): Promise<string> {
    const storageDir = 'cloud-storage';
    if (!fs.existsSync(storageDir)) {
      fs.mkdirSync(storageDir, { recursive: true });
    }

    const destinationPath = path.join(storageDir, remoteFileName);
    fs.copyFileSync(localFilePath, destinationPath);

    return `/downloads/cloud-storage/${remoteFileName}`;
  }

  async deleteFile(remoteFileName: string): Promise<void> {
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

  private async deleteFromGoogleCloud(remoteFileName: string): Promise<void> {
    if (!this.googleStorage || !this.config.googleCloud) {
      throw new Error('Google Cloud Storage not configured');
    }

    const bucket = this.googleStorage.bucket(this.config.googleCloud.bucketName);
    await bucket.file(remoteFileName).delete();
  }

  private async deleteFromAWS(remoteFileName: string): Promise<void> {
    if (!this.s3 || !this.config.aws) {
      throw new Error('AWS S3 not configured');
    }

    const params = {
      Bucket: this.config.aws.bucketName,
      Key: remoteFileName,
    };

    await this.s3.deleteObject(params).promise();
  }

  private async deleteFromLocalStorage(remoteFileName: string): Promise<void> {
    const filePath = path.join('cloud-storage', remoteFileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  async getFileUrl(remoteFileName: string): Promise<string> {
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

  private getGoogleCloudUrl(remoteFileName: string): string {
    if (!this.config.googleCloud) {
      throw new Error('Google Cloud Storage not configured');
    }
    return `https://storage.googleapis.com/${this.config.googleCloud.bucketName}/${remoteFileName}`;
  }

  private getAWSUrl(remoteFileName: string): string {
    if (!this.config.aws) {
      throw new Error('AWS S3 not configured');
    }
    return `https://${this.config.aws.bucketName}.s3.${this.config.aws.region}.amazonaws.com/${remoteFileName}`;
  }

  private getContentType(filePath: string): string {
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes: { [key: string]: string } = {
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

  async testConnection(): Promise<boolean> {
    try {
      switch (this.config.provider) {
        case 'google':
          if (!this.googleStorage || !this.config.googleCloud) return false;
          const bucket = this.googleStorage.bucket(this.config.googleCloud.bucketName);
          await bucket.exists();
          return true;
        case 'aws':
          if (!this.s3 || !this.config.aws) return false;
          await this.s3.headBucket({ Bucket: this.config.aws.bucketName }).promise();
          return true;
        case 'local':
        default:
          return true; // Local storage always available
      }
    } catch (error) {
      console.error('Cloud storage connection test failed:', error);
      return false;
    }
  }
}

// Factory function to create cloud storage service from environment variables
export function createCloudStorageFromEnv(): CloudStorageService {
  const provider = (process.env.CLOUD_STORAGE_PROVIDER as 'google' | 'aws' | 'local') || 'local';

  const config: CloudStorageConfig = {
    provider,
  };

  if (provider === 'google') {
    config.googleCloud = {
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID || '',
      keyFilename: process.env.GOOGLE_CLOUD_KEY_FILENAME || '',
      bucketName: process.env.GOOGLE_CLOUD_BUCKET_NAME || '',
    };
  } else if (provider === 'aws') {
    config.aws = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      region: process.env.AWS_REGION || 'us-east-1',
      bucketName: process.env.AWS_BUCKET_NAME || '',
    };
  }

  return new CloudStorageService(config);
}
