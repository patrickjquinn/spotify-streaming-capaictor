import { WebPlugin } from '@capacitor/core';

import type { SpotifyStreamingPlugin } from './definitions';

export class SpotifyStreamingWeb
  extends WebPlugin
  implements SpotifyStreamingPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
