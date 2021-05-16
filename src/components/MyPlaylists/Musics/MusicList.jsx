import { useEffect, useState } from "react";
import Music from "./Music";

const MusicList = ({ currentTracks, totalTracks, musicsPerPage, changePage, musicActive, setOpenAddModal, onClickEditMusic, setCurrentPlaying, handleClickDelete_button, handleSelectMusic }) => {
  console.log(currentTracks);

  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (totalTracks && currentTracks) {
      let _totalPages = [];
      for (let i = 1; i <= Math.ceil(totalTracks?.length / musicsPerPage); i++) {
        _totalPages.push(i);
      }
      setTotalPages(_totalPages);
      return;
    }
    return;
  }, [currentTracks, totalTracks]);

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
            totalPages.map((pageNumber) => (
              <li className="page-wrapper" key={pageNumber}>
                <a
                  className="page"
                  href="#"
                  onClick={(e) => {
                    e.stopPropagation();
                    changePage(pageNumber);
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
