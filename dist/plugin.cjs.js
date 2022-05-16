'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SpotifyStreaming = core.registerPlugin('SpotifyStreaming', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SpotifyStreamingWeb()),
});

class SpotifyStreamingWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SpotifyStreamingWeb: SpotifyStreamingWeb
});

exports.SpotifyStreaming = SpotifyStreaming;
//# sourceMappingURL=plugin.cjs.js.map
