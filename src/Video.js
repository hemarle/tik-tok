import React, { useRef, useState } from "react";
import "./Video.css";

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, likes, chats, shares, desc, song }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        src={url}
        loop
        onClick={onVideoPress}
        ref={videoRef}
        alt="Vid"
        className="video__player"
      ></video>

      <VideoFooter channel={channel} desc={desc} song={song} />

      <VideoSidebar likes={likes} chats={chats} shares={shares} />
    </div>
  );
}

export default Video;
