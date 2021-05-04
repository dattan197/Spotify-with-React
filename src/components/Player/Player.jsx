import { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import useAudioPlayer from "../../customHooks/useAudioPlayer";
import "./player.scss";

const Player = ({ image }) => {
  const { curTime, setCurTime, duration, playing, setPlaying, clickedTime, setClickedTime, percent } = useAudioPlayer();

  const [sound, setSound] = useState(null);

  const [width, setWidth] = useState(0);

  const [value, setValue] = useState(0);

  function showSoundValue(event) {
    //setSound(event.target.value);
    //setWidth(event.target.value);
    console.log(event.target.value);
  }

  function formatTime(time) {
    return moment.duration(time, "seconds").format("mm:ss", { trim: false });
  }

  function handleTimeDrag(e) {
    console.log(e);
  }

  function handlePercentUpdate() {
    let percent = 0;

    return percent;
  }

  function handleDragBar(e) {
    let { value } = e.target;
    //console.log(e.target.value);
    let timeTransfer = (value * duration) / 100;
    setClickedTime(timeTransfer);
  }

  useEffect(() => {
    document.querySelector(".bar").oninput = function () {
      var _value = ((this.value - this.min) / (this.max - this.min)) * 100;
      console.log(_value);
      setValue(_value);
      this.style.background = "linear-gradient(to right, #82CFD0 0%, #EACCF8 " + _value + "%, transparent " + _value + "%, transparent 100%)";
    };
  });

  return (
    <section id="player">
      <audio id="audio">
        <source src="https://p.scdn.co/mp3-preview/01bb2a6c9a89c05a4300aea427241b1719a26b06" />
      </audio>

      {/*         <div className="bar" style={{ width: width + "%" }} onMouseDown={(e) => handleTimeDrag(e)}></div>
       */}
      <input type="range" value={value} className="bar" min="0" max={100} onInput={(e) => handleDragBar(e)} />

      <div className="player__wrapper container">
        <div className="player__info">
          <img className={`player__img ${playing ? "" : "stop-rotaion"}`} src={image} alt="music-img" />
          <div className="player__title">
            <p>Song name</p>
            <span>{formatTime(curTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="player__btn">
          <button className="btn-previous">
            <i className="fa fa-backward" />
          </button>
          {playing ? (
            <button className="btn-pause" onClick={() => setPlaying(false)}>
              <i className="fa fa-pause" />
            </button>
          ) : (
            <button className="btn-play" onClick={() => setPlaying(true)}>
              <i className="fa fa-play" />
            </button>
          )}
          <button className="btn-next">
            <i className="fa fa-forward" />
          </button>
        </div>
        <div className="player__sound">
          <i className="fa fa-volume-up"></i>
          <input type="range" name="vol" className="sound" min="0" max="100" onChange={showSoundValue} />
        </div>
      </div>
    </section>
  );
};

export default Player;