import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SpotifyStreamingPlugin)
public class SpotifyStreamingPlugin: CAPPlugin {
    private let implementation = SpotifyStreaming()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func play(_ call: CAPPluginCall) {
        let uri = call.getString("uri") ?? ""
        let token = call.getString("token") ?? ""
        let client = call.getString("clientId") ?? ""
        call.resolve([
            "value": implementation.play(uri, token, client)
        ])
    }
    
    @objc func seekTo(_ call: CAPPluginCall) {
        let position_ms: Int = call.getInt("position_ms", 0)
        call.resolve([
            "value": implementation.seekTo(position_ms)
        ])
    }
}
