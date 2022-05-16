import { WebPlugin } from '@capacitor/core';
export class SpotifyStreamingWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async pause() {
        console.log('PAUSE');
        return;
    }
    async play(options) {
        console.log('PLAY', options);
        return;
    }
    async resume() {
        console.log('RESUME');
        return;
    }
    async seekTo(options) {
        console.log('SEEK', options);
        return;
    }
    async getPosition() {
        console.log('GET POSITION');
        return { position_ms: 0 };
    }
}
//# sourceMappingURL=web.js.map