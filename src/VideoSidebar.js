import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
function VideoSidebar({ likes, chats, shares }) {
  const [like, setLike] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {like ? (
          <FavoriteIcon
            className="videoSidebar__redheart"
            onClick={(e) => setLike(false)}
          />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLike(true)} />
        )}

        <p>{like ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <ChatIcon />
        <p>{chats}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
