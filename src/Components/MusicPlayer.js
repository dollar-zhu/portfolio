import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../Music.css";

const MusicPlayer = ({ name, description, music }) => {
  return (
    <div className="music-player">
      <h3>{name}</h3>
      <p className="music-description">{description}</p>
      <AudioPlayer
        src={music}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
};

export default MusicPlayer;
