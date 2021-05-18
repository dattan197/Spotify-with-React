const Music = ({ onClickEditMusic, handleClickDelete_button, track, handleSelectMusic, index, musicActive, setCurrentPlaying }) => {
  return (
    <li
      className={`list-item ${musicActive === index ? "active-item" : 0}`}
      onClick={() => {
        setCurrentPlaying(index);
        handleSelectMusic(track?.id, track?.name, track?.image, index, track?.preview_url);
      }}
    >
      <img className="audio-img" src={track?.image} alt="song-img" />
      <p>{track?.name}</p>
      <div className={`settings ${musicActive === index ? "active-settings" : 0}`}>
        <label>
          <i
            className="fa fa-edit"
            onClick={(e) => {
              e.stopPropagation();
              onClickEditMusic(track?.id, track?.name, track?.preview_url, track?.image);
            }}
          ></i>
        </label>
        <i
          className="fa fa-trash-alt"
          onClick={(e) => {
            e.stopPropagation();
            handleClickDelete_button(track?.id, track?.name, "music");
          }}
        ></i>
      </div>
    </li>
  );
};

export default Music;
