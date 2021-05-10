import { useState } from "react";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";

const PlayLists = ({
  handleSelectPlaylist,
  playlistActive,
  handleAddPlaylistRequest,
  showInput,
  handlePlaylistInput,
  setShowInput,
  playlistName,
  error,
}) => {
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
      <div className="playlist__add">
        <h3>Playlists</h3>
        <button
          className="btn"
          onClick={(e) => {
            console.log("add");
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
                  value={playlistName}
                  onChange={(e) => {
                    handlePlaylistInput(e);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="btn-add">
                  <i
                    className="fa fa-check"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddPlaylistRequest();
                    }}
                  ></i>
                  <i class="fa fa-times close"></i>
                </div>
              </li>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </>
          ) : null}
          {renderPlaylists(playlists)}
        </ul>
      </div>
    </div>
  );
};

export default PlayLists;
