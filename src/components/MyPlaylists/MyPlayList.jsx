import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Style
import "./myPlayList.scss";

// Components
import PlayLists from "./PlayLists/PlayLists";
import Lyrics from "./Lyrics/Lyrics";
import MusicList from "./Musics/MusicList";

const MyPlayList = ({
  user,
  tracks,
  handleSelectMusic,
  spotifyApi,
  setMusicActive,
  musicActive,
  setCurrentPlaying,
  showInput,
  setShowInput,
}) => {
  const dispatch = useDispatch();
  const [playlistActive, setPlaylistActive] = useState(null);
  const [addPlaylistSuccess, setAddPlaylistSuccess] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState("");

  // GET PLAYLISTS
  useEffect(() => {
    if (user == null) return;
    spotifyApi
      .getUserPlaylists(user.id)
      .then((res) =>
        dispatch({
          type: "GET_PLAYLISTS",
          playlists: res?.items,
        })
      )
      .catch((err) => console.error(err));
    return () => {
      setAddPlaylistSuccess(false);
    };
  }, [user, addPlaylistSuccess]);

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
        })
      )
      .catch((err) => console.error(err));
    setMusicActive(null);
  }

  function handlePlaylistInput(e) {
    let { value } = e.target;
    console.log(value);
    setPlaylistName(value);
  }

  function handleAddPlaylistRequest() {
    if (!playlistName) {
      setError("This field can not be blank!");
      return;
    }
    const body = {
      name: playlistName,
      description: "description",
      public: false,
    };
    spotifyApi
      .createPlaylist(user?.id, body)
      .then((res) => {
        setAddPlaylistSuccess(true);
        setShowInput(false);
        setPlaylistName("");
        setError("");
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (showInput == false) {
      setError("");
    }
    return;
  }, [showInput]);

  return (
    <section id="audio-list">
      <PlayLists
        handleSelectPlaylist={handleSelectPlaylist}
        playlistActive={playlistActive}
        handleAddPlaylistRequest={handleAddPlaylistRequest}
        showInput={showInput}
        setShowInput={setShowInput}
        handlePlaylistInput={handlePlaylistInput}
        playlistName={playlistName}
        error={error}
      />
      <MusicList
        tracks={tracks}
        handleSelectMusic={handleSelectMusic}
        musicActive={musicActive}
        setCurrentPlaying={setCurrentPlaying}
      />
      <Lyrics />
    </section>
  );
};

export default MyPlayList;
