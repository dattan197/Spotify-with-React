const PlayerVolume = ({mute, volumeValue, setVolumeValue, clickedVolume, handleChangeVolume}) => {
    return (
        <div className="player__sound">
          {mute ? <i className="fa fa-volume-mute" onClick={() => setVolumeValue(clickedVolume)}></i> : <i className="fa fa-volume-up" onClick={() => setVolumeValue(0)}></i>}

          <input
            type="range"
            value={volumeValue ?? 100}
            className="sound"
            min={0}
            max={100}
            onInput={(e) => {
              handleChangeVolume(e);
            }}
          />
        </div>
    )
}

export default PlayerVolume