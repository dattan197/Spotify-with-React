const Music = ({ track, handleSelectMusic, index, musicActive, setCurrentPlaying }) => {
  return (
    <li
      className={`list-item ${musicActive === index ? "active" : 0}`}
      onClick={() => {
        setCurrentPlaying(index);
        handleSelectMusic(track?.name, track?.album?.images[0]?.url, index, track?.preview_url);
      }}
    >
      <img className="audio-img" src={track?.album?.images[2]?.url} alt="song-img" />
      <p>{track?.name}</p>
    </li>
  );
};

export default Music;