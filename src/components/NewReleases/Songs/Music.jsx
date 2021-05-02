const Music = ({ track, handleSelectMusic }) => {
  return (
    <li
      className="list-item"
      onClick={() => {
        handleSelectMusic(track?.name, track?.album?.images[0]?.url);
      }}
    >
      <img
        className="audio-img"
        src={track?.album?.images[2]?.url}
        alt="song-img"
      />
      <p>{track?.name}</p>
    </li>
  );
};

export default Music;
