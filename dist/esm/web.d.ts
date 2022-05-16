import { WebPlugin } from '@capacitor/core';
import type { SpotifyStreamingPlugin } from './definitions';
export declare class SpotifyStreamingWeb extends WebPlugin implements SpotifyStreamingPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
