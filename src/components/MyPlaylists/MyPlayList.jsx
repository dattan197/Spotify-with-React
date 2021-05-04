import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Style
import "./myPlayList.scss";
// Packages
//import lyricsFinder from "lyrics-finder";
// Components
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import MusicList from "./Musics/MusicList";

const MyPlayList = ({ loading, setImage, setTitle, spotifyApi }) => {
  const dispatch = useDispatch();

  const [playlistActive, setPlaylistActive] = useState(null);

  const [musicActive, setMusicActive] = useState(null);

  const [artist, setArtist] = useState("");

  const tracks = useSelector((state) => state.PlayListsReducer.tracks);

  function handleSelectPlaylist(id, index) {
    setPlaylistActive(index);
    // if choose an active playlist => cancel API request
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

  function handleSelectMusic(title, image, index) {
    setTitle((_title) => (_title = title));
    setImage((_image) => (_image = image));
    setMusicActive(index);
    //findLyrics(artist, title);
  }

  /* async function findLyrics(artist, title) {
    let lyrics = (await lyricsFinder(artist, title)) || "Not Found!";
    console.log(lyrics);
  } */

  return (
    <section id="audio-list">
      <PlayLists handleSelectPlaylist={handleSelectPlaylist} playlistActive={playlistActive} />
      <MusicList tracks={tracks} handleSelectMusic={handleSelectMusic} musicActive={musicActive} />
      <Lyrics />
    </section>
  );
};

export default MyPlayList;