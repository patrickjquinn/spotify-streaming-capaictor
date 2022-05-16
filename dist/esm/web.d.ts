import { WebPlugin } from '@capacitor/core';
import type { SpotifyStreamingPlugin } from './definitions';
export declare class SpotifyStreamingWeb extends WebPlugin implements SpotifyStreamingPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    pause(): Promise<void>;
    play(options: {
        uri: string;
        token: string;
        clientId: string;
        positionMs: number;
    }): Promise<void>;
    resume(): Promise<void>;
    seekTo(options: {
        position_ms: number;
    }): Promise<void>;
    getPosition(): Promise<{
        position_ms: number;
    }>;
}
