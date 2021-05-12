import Music from "./Music";

const MusicList = ({
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
      />
    ));
  }
  return (
    <div className="musics">
      <div>
        <h3>Musics</h3>
      </div>
      <hr />
      <div className="musics__wrapper">
        <ul className="list">{renderMusicList(tracks)}</ul>
      </div>
    </div>
  );
};

export default MusicList;
