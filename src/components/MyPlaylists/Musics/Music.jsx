const Music = ({ track, handleSelectMusic, index, musicActive }) => {
  return (
    <li
      className={`list-item ${musicActive == index ? "active" : 0}`}
      onClick={() => {
        handleSelectMusic(track?.name, track?.album?.images[0]?.url, index);
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
