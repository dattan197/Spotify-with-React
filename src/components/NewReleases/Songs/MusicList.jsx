import Music from "./Music";

const MusicList = ({ tracks, handleSelectMusic }) => {
  function renderMusicList(_tracks) {
    if (_tracks.length < 1) return "No music to show!";
    return _tracks.map((item) => (
      <Music
        key={item?.track?.id}
        track={item?.track}
        handleSelectMusic={handleSelectMusic}
      />
    ));
  }
  return (
    <div className="songs">
      <div>
        <h3>Musics</h3>
      </div>
      <hr />
      <div className="songs__wrapper">
        <ul className="list">{renderMusicList(tracks)}</ul>
      </div>
    </div>
  );
};

export default MusicList;
