import { WebPlugin } from '@capacitor/core';

import type { SpotifyStreamingPlugin } from './definitions';

export class SpotifyStreamingWeb
  extends WebPlugin
  implements SpotifyStreamingPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async pause(): Promise<void> {
    console.log('PAUSE');
    return
  }
  async play(options: { uri: string, token: string, clientId: string, positionMs: number }): Promise<void> {
    console.log('PLAY', options);
    return
  }
  async resume(): Promise<void> {
    console.log('RESUME');
    return
  }
  async seekTo(options: { position_ms: number }): Promise<void> {
    console.log('SEEK', options);
    return
  }
  async getPosition(): Promise<{ position_ms: number }> {
    console.log('GET POSITION');
    return { position_ms: 0 }
  }
}
