declare module '@sefinek/random-emoji' {
    /**
     * Represents an emoji with name, content, and type.
     * Used for the collection of emojis with more detailed information.
     */
    export interface EmojisCollection {
        content: string;
        name: string;
        type: string;
    }

    /**
     * Represents an emoji with name and content.
     * Used for simpler emoji categories like cats, hearts, etc.
     */
    export interface Emojis {
        content: string;
        name: string;
    }

    /**
     * Returns a random emoji from a big collection.
     * Each emoji includes its name and type.
     * @returns {EmojisCollection} A random emoji from the collection.
     */
    export function emojis(): EmojisCollection;

    /**
     * Returns a random cat emoji.
     * @returns {Emojis} A random cat emoji.
     */
    export function cats(): Emojis;

    /**
     * Returns a random circle emoji.
     * @returns {Emojis} A random circle emoji.
     */
    export function circles(): Emojis;

    /**
     * Returns a random food emoji.
     * @returns {Emojis} A random food emoji.
     */
    export function foods(): Emojis;

    /**
     * Returns a random heart emoji.
     * @returns {Emojis} A random heart emoji.
     */
    export function hearts(): Emojis;

    /**
     * Returns a random square emoji.
     * @returns {Emojis} A random square emoji.
     */
    export function squares(): Emojis;

    /**
     * Returns a random Unicode emoji character.
     * @returns {string} A random Unicode emoji.
     */
    export function unicode(): string;

    /**
     * Represents the response from an API endpoint.
     * Includes information about the success status, API category, and the response message.
     */
    export interface ApiResponse {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }

    /**
     * Kaomojis class for accessing various random content endpoints.
     * Allows fetching of random kaomojis from specified endpoints.
     */
    export class Kaomojis {
        constructor();

        /**
         * Dynamically generated methods for accessing random content endpoints.
         * Each method returns a Promise that resolves to an ApiResponse.
         * @returns {Promise<ApiResponse>} A promise resolving to the API response.
         */
        [endpoint: string]: () => Promise<ApiResponse>;
    }

    /**
     * The current version of the module.
     */
    export const version: string;
}
