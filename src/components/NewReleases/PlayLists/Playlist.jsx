const Playlist = ({ playlist, handleSelectPlaylist }) => {
  return (
    <li
      className="playlist__item"
      onClick={() => {
        handleSelectPlaylist(playlist?.id);
      }}
    >
      <p>{playlist?.name}</p>
    </li>
  );
};

export default Playlist;
