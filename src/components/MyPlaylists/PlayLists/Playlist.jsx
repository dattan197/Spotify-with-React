const Playlist = ({
  playlist,
  handleSelectPlaylist,
  playlistActive,
  index,
}) => {
  return (
    <li
      className={`playlist__item ${playlistActive == index ? "active" : ""}`}
      onClick={() => {
        handleSelectPlaylist(playlist?.id, index);
      }}
    >
      <p>{playlist?.name}</p>
    </li>
  );
};

export default Playlist;
