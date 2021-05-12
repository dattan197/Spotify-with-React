import Playlist from "./Playlist";

const PlayLists = ({
  playlists,
  playlistError,
  addPlaylistInput,
  handleAddPlaylist,
  setAddPlaylistInput,
  handleClickDelPlaylist,
  handleSelectPlaylist,
  playlistActive,
  showInput,
  setShowInput,
  editPlaylist,
  setEditPlaylist,
  submitEditPlaylist,
}) => {
  
  function renderPlaylists(_playlists) {
    if (_playlists.length < 1) return <h3>No playlists to show</h3>;
    return _playlists.map((playlist, index) => (
      <Playlist
        handleClickDelPlaylist={handleClickDelPlaylist}
        playlist={playlist}
        key={playlist?.id}
        handleSelectPlaylist={handleSelectPlaylist}
        index={index}
        playlistActive={playlistActive}
        editPlaylist={editPlaylist}
        setEditPlaylist={setEditPlaylist}
        submitEditPlaylist={submitEditPlaylist}
      />
    ));
  }

  return (
    <div className="playlist container">
      <div className="playlist__add">
        <h3>Playlists</h3>
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowInput(true);
          }}
        >
          <i className="fa fa-plus"></i>Add
        </button>
      </div>
      <hr />
      <div className="playlist__wrapper">
        <ul className="list">
          {showInput ? (
            <>
              <li className="playlist__input">
                <input
                  type="text"
                  value={addPlaylistInput}
                  onChange={(e) => {
                    setAddPlaylistInput(e.target.value);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="btn-add">
                  <i
                    className="fa fa-check"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddPlaylist(addPlaylistInput);
                    }}
                  ></i>
                  <i
                    className="fa fa-times close"
                    onClick={() => setAddPlaylistInput("")}
                  ></i>
                </div>
              </li>
              {playlistError && <p style={{ color: "red" }}>{playlistError}</p>}
            </>
          ) : null}

          {renderPlaylists(playlists)}
        </ul>
      </div>
    </div>
  );
};

export default PlayLists;
