import { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import useAudioPlayer from "../../customHooks/useAudioPlayer";
import "./player.scss";
import ProgressBar from "./ProgressBar";
import PlayerInfo from "./PlayerInfo";
import PlayerButtons from "./PlayerButtons";
import PlayerVolume from "./PlayerVolume";

const Player = ({ image, title, trackUrl, setCurrentPlaying }) => {
  const [volumeValue, setVolumeValue] = useState(null);

  const { time, volume } = useAudioPlayer(trackUrl, volumeValue);

  function formatTime(_time) {
    return moment.duration(_time, "seconds").format("mm:ss", { trim: false });
  }

  function handleDragBar(e) {
    let { value } = e.target;
    let timeTransfer = (value * time.duration) / 100; // transfer % to time
    time.setClickedTime(timeTransfer);
    time.setPercent(value);
  }

  function handleChangeVolume(e) {
    let { value } = e.target;
    console.log(value);
    setVolumeValue(value);
    volume.setClickedVolume(value);
  }

  return (
    <section id="player">
      <audio id="audio">
        <source src={trackUrl} />
      </audio>

      <ProgressBar percent={time.percent} handleDragBar={handleDragBar} />

      <div className="player__wrapper container">
        <PlayerInfo title={title} image={image} playing={time.playing} curTime={time.curTime} duration={time.duration} formatTime={formatTime} />
        <PlayerButtons playing={time.playing} setPlaying={time.setPlaying} setCurrentPlaying={setCurrentPlaying} />
        <PlayerVolume mute={volume.mute} volumeValue={volumeValue} setVolumeValue={setVolumeValue} clickedVolume={volume.clickedVolume} handleChangeVolume={handleChangeVolume} />
      </div>
    </section>
  );
};

export default Player;