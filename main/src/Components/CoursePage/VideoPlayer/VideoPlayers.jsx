import React from 'react'
import YouTubeIframe  from 'react-youtube-iframe'

export default function VideoPlayers({videoLink}) {
    return (
        <div>
            <iframe 
                width="560" 
                height="315"
                src= {videoLink}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen="true" 
                style={{width: "100%", height: "1000px"}}>
                
            </iframe>
        </div>
    )
}
