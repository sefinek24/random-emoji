declare module '@sefinek/random-emoji' {
    // Unicode
    export function unicode(): string;


    // Random emojis
    export interface Emoji {
        content: string;
        name: string;
        type: string;
    }
    export function emojis(): Emoji;
    export function cats(): Emoji;
    export function hearts(): Emoji;
    export function foods(): Emoji;
    export function circles(): Emoji;


    // Kaomojis
    export interface ApiResponse {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }
    export class Kaomojis {
        cat(): Promise<ApiResponse>;
        owo(): Promise<ApiResponse>;
        uwu(): Promise<ApiResponse>;
        love(): Promise<ApiResponse>;
    }


    // Other
    export const version: string;
}
