import React from "react";

const PlayerInfo = ({ title, image, playing, curTime, duration, formatTime }) => {
  return (
    <div className="player__info">
      <img className={`player__img ${playing ? "" : "stop-rotaion"}`} src={image} alt="music-img" />
      <div className="player__title">
        <p>{title}</p>
        <span>{formatTime(curTime)}</span>
        <span>/</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
