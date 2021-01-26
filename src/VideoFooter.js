import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
function VideoFooter({ channel, desc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__music" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        className="videoFooter__record"
      />
    </div>
  );
}

export default VideoFooter;
