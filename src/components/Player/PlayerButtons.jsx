const PlayerButtons = ({ playing, setPlaying, setCurrentPlaying }) => {
    return (
      <div className="player__btn">
        <button className="btn-previous" onClick={() => setCurrentPlaying((_index) => --_index)}>
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
        <button
          className="btn-next"
          onClick={() => {
            setCurrentPlaying((_index) => ++_index);
          }}
        >
          <i className="fa fa-forward" />
        </button>
      </div>
    );
  };
  
  export default PlayerButtons;