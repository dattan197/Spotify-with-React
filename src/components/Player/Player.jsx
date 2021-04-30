import './player.scss'

const Player = () => {
  return (
    <section id="audio-player">
      <div className="player__wrapper container">
        <audio id="player">
          <source src="https://p.scdn.co/mp3-preview/01bb2a6c9a89c05a4300aea427241b1719a26b06" />
        </audio>
        <button className="btn-previous">
          <i className="fa fa-backward" />
        </button>
        <button className="btn-play">
          <i className="fa fa-play" />
        </button>
        <button className="btn-pause">
          <i className="fa fa-pause" />
        </button>
        <button className="btn-next">
          <i className="fa fa-forward" />
        </button>
      </div>
    </section>
  );
};

export default Player;