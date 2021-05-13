const Music = ({
  handleClickDelete_button,
  track,
  handleSelectMusic,
  index,
  musicActive,
  setCurrentPlaying,
}) => {
  return (
    <li
      className={`list-item ${musicActive === index ? "active-item" : 0}`}
      onClick={() => {
        setCurrentPlaying(index);
        handleSelectMusic(
          track?.name,
          track?.images[0]?.url,
          index,
          track?.preview_url
        );
      }}
    >
      <img className="audio-img" src={track?.images[2]?.url} alt="song-img" />
      <p>{track?.name}</p>
      <div
        className={`settings ${musicActive === index ? "active-settings" : 0}`}
      >
        <label>
          <i className="fa fa-edit"></i>
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
