// Style
import "./myPlayList.scss";
// Components
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import MusicList from "./Musics/MusicList";

const MyPlayList = ({ playlistProps, musicProps }) => {
  return (
    <section id="audio-list">
      <PlayLists {...playlistProps} />
      <MusicList {...musicProps} />
      <Lyrics />
    </section>
  );
};

export default MyPlayList;
