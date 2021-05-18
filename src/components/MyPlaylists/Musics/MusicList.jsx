import Music from "./Music";

const MusicList = ({
  handleOnChangeSearch,
  search,
  currentPage,
  currentTracks,
  totalPages,
  handleChangePage,
  musicActive,
  setOpenAddModal,
  onClickEditMusic,
  setCurrentPlaying,
  handleClickDelete_button,
  handleSelectMusic,
}) => {
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
    <div className="musics container">
      <div className="add">
        <h3>Music</h3>
        <input type="text" placeholder="search" value={search} onChange={handleOnChangeSearch} />
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
            totalPages.map((pageNumber, index) => {
              const pageClasses = ["page"];
              if (pageNumber === currentPage) pageClasses.push("page-active");
              return (
                <li className="page-wrapper" key={pageNumber}>
                  <span
                    className={pageClasses.join(" ")}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChangePage(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MusicList;
