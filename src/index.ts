import { registerPlugin } from '@capacitor/core';

import type { SpotifyStreamingPlugin } from './definitions';

const SpotifyStreaming = registerPlugin<SpotifyStreamingPlugin>(
  'SpotifyStreaming',
  {
    web: () => import('./web').then(m => new m.SpotifyStreamingWeb()),
  },
);

export * from './definitions';
export { SpotifyStreaming };
