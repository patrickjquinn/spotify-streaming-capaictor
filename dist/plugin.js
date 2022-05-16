var capacitorSpotifyStreaming = (function (exports, core) {
    'use strict';

    const SpotifyStreaming = core.registerPlugin('SpotifyStreaming', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SpotifyStreamingWeb()),
    });

    class SpotifyStreamingWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SpotifyStreamingWeb: SpotifyStreamingWeb
    });

    exports.SpotifyStreaming = SpotifyStreaming;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
