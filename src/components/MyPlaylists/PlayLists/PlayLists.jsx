import { useSelector } from "react-redux";
import Playlist from "./Playlist";

const PlayLists = ({ handleSelectPlaylist, playlistActive }) => {

  const playlists = useSelector((state) => state.PlayListsReducer.playlists);

  function renderPlaylists(_playlists) {
    if (_playlists.length < 1) return <h3>No playlists to show</h3>;
    return _playlists.map((playlist, index) => (
      <Playlist
        playlist={playlist}
        key={playlist?.id}
        handleSelectPlaylist={handleSelectPlaylist}
        index={index}
        playlistActive={playlistActive}
      />
    ));
  }

  return (
    <div className="playlist container">
      <div>
        <h3>Playlists</h3>
      </div>
      <hr />
      <div className="playlist__wrapper">
        <ul className="list">{renderPlaylists(playlists)}</ul>
      </div>
    </div>
  );
};

export default PlayLists;
