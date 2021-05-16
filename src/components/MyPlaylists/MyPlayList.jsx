// Style
import "./myPlayList.scss";
// Components
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import MusicList from "./Musics/MusicList";
import { useEffect, useState } from "react";

const MyPlayList = ({ playlistProps, musicProps }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [musicsPerPage, setMusicsPerPage] = useState(5);
  const [currentTracks, setCurrentTracks] = useState(null);

  useEffect(() => {
    if (musicProps?.totalTracks && musicProps?.totalTracks.length > 0) {
      const indexOfLastItem = musicsPerPage * currentPage;
      const indexOfFirstItem = indexOfLastItem - musicsPerPage;
      const currentMusics = musicProps?.totalTracks.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentTracks(currentMusics);
      return;
    }
    return;
  }, [musicProps?.totalTracks]);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <section id="audio-list">
      <PlayLists {...playlistProps} />
      <MusicList {...musicProps} currentTracks={currentTracks} musicsPerPage={musicsPerPage} changePage={changePage} />
      <Lyrics />
    </section>
  );
};

export default MyPlayList;
