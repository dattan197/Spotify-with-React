import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Packages
import SpotifyWebApi from "spotify-web-api-js";

// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MyPlayList from "../../components/MyPlaylists/MyPlayList";
import Player from "../../components/Player/Player";
import AudioInfo from "../../components/AudioInfo/AudioInfo";

// Assets
import background from "../../assets/background.jpg";

const spotifyApi = new SpotifyWebApi();

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // state to trigger open sidebar
  const [image, setImage] = useState(background); // state change image
  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title
  const [trackUrl, setTrackUrl] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicActive, setMusicActive] = useState(null);
  const [disable, setDisable] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const user = useSelector((state) => state.UserReducer.user);
  const tracks = useSelector((state) => state.PlayListsReducer.tracks);

  function toggleSidebar() {
    setOpen((_open) => !_open);
  }

  function handleSelectMusic(title, image, index, url) {
    setTitle((_title) => (_title = title));
    setImage((_image) => (_image = image));
    setTrackUrl(url);
    if (index == null) {
      setDisable(true);
      return;
    }
    setDisable(false);
    setMusicActive(index);
  }

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    // GET USER INFO
    spotifyApi
      .getMe()
      .then((res) => {
        dispatch({
          type: "GET_USER",
          user: res,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  // HANDLE CLICK PREV & NEXT ON PLAYER
  useEffect(() => {
    if (currentPlaying == null) return;
    if (currentPlaying >= tracks.length) {
      setCurrentPlaying(0);
      handleSelectMusic(
        tracks[0]?.track?.name,
        tracks[0]?.track?.album?.images[0]?.url,
        currentPlaying,
        tracks[0]?.track?.preview_url
      );
      return;
    }
    if (currentPlaying < 0) {
      setCurrentPlaying(tracks.length - 1);
      handleSelectMusic(
        tracks[tracks.length - 1]?.track?.name,
        tracks[tracks.length - 1]?.track?.album?.images[0]?.url,
        currentPlaying,
        tracks[tracks.length - 1]?.track?.preview_url
      );
      return;
    }
    handleSelectMusic(
      tracks[currentPlaying]?.track?.name,
      tracks[currentPlaying]?.track?.album?.images[0]?.url,
      currentPlaying,
      tracks[currentPlaying]?.track?.preview_url
    );
  }, [currentPlaying]);

  return (
    <>
      <img className="background" src={image} alt="background-img" />
      <div className="filter" />
      <main
        id="main"
        onClick={() => {
          setShowInput(false);
        }}
      >
        <Header
          toggleSidebar={toggleSidebar}
          open={open}
          spotifyApi={spotifyApi}
          handleSelectMusic={handleSelectMusic}
        />
        <AudioInfo title={title} image={image} />
        <MyPlayList
          user={user}
          tracks={tracks}
          spotifyApi={spotifyApi}
          handleSelectMusic={handleSelectMusic}
          setTrackUrl={setTrackUrl}
          musicActive={musicActive}
          setMusicActive={setMusicActive}
          setCurrentPlaying={setCurrentPlaying}
          showInput={showInput}
          setShowInput={setShowInput}
        />
        {trackUrl ? (
          <Player
            image={image}
            title={title}
            trackUrl={trackUrl}
            disable={disable}
            setCurrentPlaying={setCurrentPlaying}
          />
        ) : (
          ""
        )}
      </main>
      <Sidebar open={open} />
    </>
  );
};

export default HomePage;
