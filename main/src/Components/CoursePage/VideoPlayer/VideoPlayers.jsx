import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
   
class VideoPlayers extends Component {
    player = {}
    state = {
        video: {
            src: "https://www.youtube.com/watch?v=uuZE_IRwLNI",
            poster: "/1.png"
        }
    }
   
    onPlayerReady(player){
        this.player = player;
    }
   
    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                />
            </div>
        );
    }
}
export default VideoPlayers;