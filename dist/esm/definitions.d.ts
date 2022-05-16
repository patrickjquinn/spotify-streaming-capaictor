export interface SpotifyStreamingPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
