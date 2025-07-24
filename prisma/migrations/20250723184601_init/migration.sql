-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "BatchStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'PAUSED');

-- CreateEnum
CREATE TYPE "CloudProvider" AS ENUM ('AWS_S3', 'GOOGLE_CLOUD', 'LOCAL');

-- CreateEnum
CREATE TYPE "MetricType" AS ENUM ('PROCESSING_TIME', 'FILE_SIZE', 'QUEUE_LENGTH', 'ERROR_RATE', 'DISK_USAGE', 'MEMORY_USAGE', 'CPU_USAGE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT,
    "apiKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_jobs" (
    "id" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "outputPath" TEXT,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "options" JSONB,
    "userId" TEXT,
    "batchJobId" TEXT,
    "cloudStorageUrl" TEXT,
    "cloudProvider" "CloudProvider",

    CONSTRAINT "video_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_variants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "outputPath" TEXT,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "processingTime" INTEGER,
    "fileSize" BIGINT,
    "duration" DOUBLE PRECISION,
    "resolution" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "variantOptions" JSONB,
    "videoJobId" TEXT NOT NULL,
    "cloudStorageUrl" TEXT,
    "cloudProvider" "CloudProvider",

    CONSTRAINT "video_variants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "batch_jobs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "BatchStatus" NOT NULL DEFAULT 'PENDING',
    "totalJobs" INTEGER NOT NULL DEFAULT 0,
    "completedJobs" INTEGER NOT NULL DEFAULT 0,
    "failedJobs" INTEGER NOT NULL DEFAULT 0,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "batchOptions" JSONB,
    "userId" TEXT,

    CONSTRAINT "batch_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processing_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "templateOptions" JSONB NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT,

    CONSTRAINT "processing_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "system_metrics" (
    "id" TEXT NOT NULL,
    "metricType" "MetricType" NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "metadata" JSONB,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "system_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_apiKey_key" ON "users"("apiKey");

-- AddForeignKey
ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_jobs" ADD CONSTRAINT "video_jobs_batchJobId_fkey" FOREIGN KEY ("batchJobId") REFERENCES "batch_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_variants" ADD CONSTRAINT "video_variants_videoJobId_fkey" FOREIGN KEY ("videoJobId") REFERENCES "video_jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batch_jobs" ADD CONSTRAINT "batch_jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processing_templates" ADD CONSTRAINT "processing_templates_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
