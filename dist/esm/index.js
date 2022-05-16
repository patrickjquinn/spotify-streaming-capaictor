import { registerPlugin } from '@capacitor/core';
const SpotifyStreaming = registerPlugin('SpotifyStreaming', {
    web: () => import('./web').then(m => new m.SpotifyStreamingWeb()),
});
export * from './definitions';
export { SpotifyStreaming };
//# sourceMappingURL=index.js.map