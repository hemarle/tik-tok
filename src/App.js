import "./App.css";
import Video from "./Video";
import db from "./firebase.js";
import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, desc, likes, shares, chats, channel, song }) => (
          <Video
            url={url}
            desc={desc}
            likes={likes}
            shares={shares}
            chats={chats}
            channel={channel}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
