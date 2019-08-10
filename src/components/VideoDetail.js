import React from 'react'

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }
    return <div>{video.snipped.title}</div>
}

export default VideoDetail