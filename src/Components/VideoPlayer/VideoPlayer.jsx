import React, { useRef } from 'react'
import './VideoPlayer.css'
import video_1 from '../../Assets/farewell.mp4'

const VideoPlayer = ({setPlayState,playState}) => {
  const player = useRef(null);
const closePlayer = (e) =>{
  if(e.target===player.current){
    setPlayState(false);
  }
}

  return (
    <div onClick={closePlayer} ref={player} className={`video-player ${playState?"":"hide"}`}>
      <video src={video_1} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
