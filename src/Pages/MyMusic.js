import React from "react";
import Navbar from "../Components/Navbar";
import VassarLifeSoundtrack from "../Music/Vassar Life Soundtrack.mp3";
import AudioPlayer from "react-h5-audio-player";
import DollarMusic from "../Music/The Wondrous Life of Dollar Zhu.mp3";
import CommonNavigation from "../Music/Common Navigation.mp3";
import "react-h5-audio-player/lib/styles.css";
import MusicPlayer from "../Components/MusicPlayer";

const MyMusic = () => {
  const Player = () => (
    <AudioPlayer
      autoPlay
      src="http://example.com/audio.mp3"
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
  return (
    <div>
      <Navbar />
      <div className="about-me-area">
        <h1 className="music-title">My Music</h1>
        <h4 className="music-intro">
          Trained as a classical pianist, I have always loved to bring joy to
          people through music. Since high school, I have been composing my own
          pieces. Here I hve selected a few that represent the differnt styles
          I've been experimenting with. Enjoy!
        </h4>
        <MusicPlayer
          name="The Vassar Life Soundtrack"
          description="The cheerful soundtrack that represents the life at Vassar College."
          music={VassarLifeSoundtrack}
        />

        <MusicPlayer
          name="The Wondrous Life of Dollar Zhu"
          description="This whimsical piece doubles as a satire of my busy life."
          music={DollarMusic}
        />

        <MusicPlayer
          name="Commmon Navigation"
          description="This piece is a reflection on my educational and professional journey. I wanted it to capture the challenges we all face during trying times, thus our common navigation."
          music={CommonNavigation}
        />
      </div>
    </div>
  );
};

export default MyMusic;
