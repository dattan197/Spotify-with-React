// Style
import "./myPlayList.scss";
// Components
import PlayLists from "./PlayLists/PlayLists";
import MusicList from "./Musics/MusicList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTracksFormSearch } from "../../redux/actions/playlistActions";

const MyPlayList = ({ playlistProps, musicProps }) => {
  const dispatch = useDispatch();
  // SEARCH
  const [search, setSearch] = useState("");

  //====================================== search =============================
  function handleOnChangeSearch(e) {
    let { value } = e.target;
    console.log(value.substr(0, 20));
    setSearch(value);
    let searchResult = musicProps.totalTracks.filter((track) => {
      return track.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (value.substr(0, 20) === "") {
      console.log("reset here");
      dispatch({
        type: "RESET_SEARCH",
        playlistIndex: playlistProps.playlistActive,
      });
      return;
    }
    dispatch(getTracksFormSearch(searchResult));
    musicProps.setCurrentPage(1);
  }

  return (
    <section id="audio-list">
      <PlayLists {...playlistProps} />
      <MusicList {...musicProps} search={search} handleOnChangeSearch={handleOnChangeSearch} />
    </section>
  );
};

export default MyPlayList;
