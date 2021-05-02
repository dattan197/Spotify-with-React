import { useEffect, useState } from "react";
import "./myPlayList.scss";
import MusicList from "./Songs/MusicList";
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import { useDispatch, useSelector } from "react-redux";

const MyPlayList = ({ newAlbums, loading, setImage, setTitle, spotifyApi }) => {
  const dispatch = useDispatch();

  const tracks = useSelector((state) => state.PlayListsReducer.tracks);
  console.log("tracks", tracks);

  const [playlistId, setPlaylistId] = useState(null);

  function handleSelectPlaylist(id) {
    spotifyApi
      .getPlaylistTracks(id)
      .then((res) =>
        dispatch({
          type: "GET_SONGS",
          tracks: res?.items,
        })
      )
      .catch((err) => console.error(err));
  }

  function handleSelectMusic(title, image) {
    setTitle((_title) => (_title = title));
    setImage((_image) => (_image = image));
  }

  /*   useEffect(() => {
    spotifyApi
      .getPlaylistTracks("4sfo4hQwaN2wDjgtQkFTI1")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }); */

  return (
    <section id="audio-list">
      <PlayLists
        handleSelectPlaylist={handleSelectPlaylist}
      />
      <MusicList tracks={tracks} handleSelectMusic={handleSelectMusic} />
      <Lyrics />
    </section>
  );
};

export default MyPlayList;
