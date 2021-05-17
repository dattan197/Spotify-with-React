import { useEffect, useState } from "react";
import Music from "./Music";

const MusicList = ({ currentTracks, totalPages, handleChangePage, musicActive, setOpenAddModal, onClickEditMusic, setCurrentPlaying, handleClickDelete_button, handleSelectMusic }) => {
  function renderMusicList(_tracks) {
    if (!_tracks || _tracks.length < 1) return "No music to show!";
    return _tracks.map((track, index) => (
      <Music
        key={track?.id}
        track={track}
        handleSelectMusic={handleSelectMusic}
        index={index}
        musicActive={musicActive}
        setCurrentPlaying={setCurrentPlaying}
        handleClickDelete_button={handleClickDelete_button}
        onClickEditMusic={onClickEditMusic}
      />
    ));
  }
  return (
    <div className="musics">
      <div className="add">
        <h3>Music</h3>
        <button
          className="btn"
          onClick={() => {
            setOpenAddModal(true);
          }}
        >
          <i className="fa fa-plus"></i>
          Add
        </button>
      </div>
      <hr />
      <div className="musics__wrapper">
        <ul className="list">{renderMusicList(currentTracks)}</ul>
      </div>
      <div className="pagination">
        <ul className="pagination-pages">
          {totalPages &&
            totalPages.map((pageNumber, index) => (
              <li className="page-wrapper" key={pageNumber}>
                <a
                  className="page"
                  href="#"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChangePage(pageNumber);
                  }}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicList;
