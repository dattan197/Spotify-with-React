import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Style
import "./myPlayList.scss";

// Components
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import MusicList from "./Musics/MusicList";

const MyPlayList = ({ tracks, handleSelectMusic, spotifyApi, setMusicActive, musicActive, setCurrentPlaying }) => {
  const dispatch = useDispatch();
  const [playlistActive, setPlaylistActive] = useState(null);

  function handleSelectPlaylist(id, index) {
    setPlaylistActive(index);
    // if re-choose an active playlist => cancel API request
    if (playlistActive === index) return;
    // only call API when choose another playlist
    spotifyApi
      .getPlaylistTracks(id)
      .then((res) =>
        dispatch({
          type: "GET_SONGS",
          tracks: res?.items,
        }),
      )
      .catch((err) => console.error(err));
    setMusicActive(null);
  }

  return (
    <section id="audio-list">
      <PlayLists handleSelectPlaylist={handleSelectPlaylist} playlistActive={playlistActive} />
      <MusicList tracks={tracks} handleSelectMusic={handleSelectMusic} musicActive={musicActive} setCurrentPlaying={setCurrentPlaying}/>
      <Lyrics />
    </section>
  );
};

export default MyPlayList;