import Foundation
import AVFoundation

@objc public class SpotifyStreaming: NSObject, SPTAudioStreamingPlaybackDelegate, SPTAudioStreamingDelegate {
    private var player: SPTAudioStreamingController

    override init() {
        self.player = SPTAudioStreamingController.sharedInstance()
        super.init()
        self.player.playbackDelegate = self
        self.player.delegate = self
        self.player.diskCache = SPTDiskCache(capacity: 1024 * 1024 * 64)
    }
    
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func play(_ uri: String, _ token: String, _ client: String) -> Any {
        do {
            try AVAudioSession.sharedInstance().setCategory(.playback, mode: .default, options: [.allowAirPlay])
            try self.player.start(withClientId: client)
        } catch {
            print("Couldn't create the audio player for file")
        }
        
        self.player.login(withAccessToken: token)
        self.player.playSpotifyURI(uri, startingWith: 0, startingWithPosition: 0, callback: nil)
        return ""
    }
    
    @objc public func seekTo(_ position_ms: Int) {
        self.player.seek(to: TimeInterval(position_ms), callback: nil)
    }
    
    @objc public func pause() {
        self.player.setIsPlaying(false, callback: nil)
    }
    
    @objc public func resume() {
        self.player.setIsPlaying(true, callback: nil)
    }
    
    public func audioStreamingDidLogin(_ audioStreaming: SPTAudioStreamingController!) {
    
    }
    public func audioStreaming(_ audioStreaming: SPTAudioStreamingController!, didReceiveError error: Error!) {
        if ((error) != nil){
            print(error ?? "Unknown error")
        }
    }
}
