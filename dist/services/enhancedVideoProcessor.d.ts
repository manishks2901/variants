import { VariantOptions } from '../types';
export interface AudioEffectOptions {
    volumeChange?: number;
    ambientTrack?: 'wind' | 'hum' | 'whitenoise' | 'rain' | 'ocean';
    ambientVolume?: number;
}
export interface IntroOutroOptions {
    intro?: {
        text: string;
        duration: number;
        fontSize?: number;
        fontColor?: string;
        backgroundColor?: string;
        position?: string;
    };
    outro?: {
        text: string;
        duration: number;
        fontSize?: number;
        fontColor?: string;
        backgroundColor?: string;
        position?: string;
        cta?: string;
    };
}
export interface MetadataOptions {
    randomizeMetadata?: boolean;
    customTitle?: string;
    customArtist?: string;
    customComment?: string;
}
export interface ColorEffectOptions {
    hue?: number;
    saturation?: number;
    brightness?: number;
    contrast?: number;
    gamma?: number;
}
export interface EnhancedVariantOptions extends VariantOptions {
    colorEffects?: ColorEffectOptions;
    audioEffects?: AudioEffectOptions;
    introOutro?: IntroOutroOptions;
    metadataOptions?: MetadataOptions;
    preset?: 'vintage' | 'vibrant' | 'monochrome' | 'warm' | 'cool' | 'dramatic';
    rotation?: number;
    text?: string;
    fontSize?: number;
    fontColor?: string;
    position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    speed?: number;
    variantIndex?: number;
}
export declare class EnhancedVideoProcessor {
    private static ensureDirectoriesExist;
    static generateVariants(inputPath: string, outputDir: string, baseOptions?: Partial<EnhancedVariantOptions>, onProgress?: (variantIndex: number, progress: number, totalProgress: number) => void): Promise<string[]>;
    private static generateRandomMetadata;
    static processVideo(inputPath: string, outputPath: string, options: EnhancedVariantOptions, onProgress?: (progress: number) => void): Promise<void>;
    static getVideoMetadata(filePath: string): Promise<any>;
    static generateThumbnail(inputPath: string, outputPath: string, timemark?: string): Promise<void>;
}
//# sourceMappingURL=enhancedVideoProcessor.d.ts.map