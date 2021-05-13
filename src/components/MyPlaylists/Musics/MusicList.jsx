import Music from "./Music";

const MusicList = ({
  setOpenAddModal,
  handleClickDelete_button,
  tracks,
  handleSelectMusic,
  musicActive,
  setCurrentPlaying,
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
        <ul className="list">{renderMusicList(tracks)}</ul>
      </div>
    </div>
  );
};

export default MusicList;
