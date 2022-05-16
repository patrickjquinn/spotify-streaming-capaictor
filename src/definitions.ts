export interface AuthorizationData {
  clientId: string;
  token: string;
}

export interface SpotifyStreamingPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  pause(): Promise<void>;
  play(options: { uri: string, token: string, clientId: string, positionMs: number }): Promise<void>;
  resume(): Promise<void>;
  seekTo(options: { position_ms: number }): Promise<void>;
  getPosition(): Promise<{ position_ms: number }>;
}
