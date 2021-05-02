import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Packages
import SpotifyWebApi from "spotify-web-api-js";

// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MyPlayList from "../../components/NewReleases/MyPlayList";
import Player from "../../components/Player/Player";
import AudioInfo from "../../components/AudioInfo/AudioInfo";

// Assets
import background from "../../assets/background.jpg";

const spotifyApi = new SpotifyWebApi();

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // state to trigger open sidebar

  const [loading, setLoading] = useState(true); // state to set loading

  const [image, setImage] = useState(background); // state change image

  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title

  const newAlbums = useSelector((state) => state.BrowseReducer.albums);

  const user = useSelector((state) => state.UserReducer.user);

  function toggleSidebar() {
    setOpen((_open) => !_open);
  }

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    // get new releases
    spotifyApi
      .getNewReleases({ offset: 1, limit: 20 })
      .then((res) => {
        dispatch({
          type: "GET_NEW_RELEASES",
          newReleases: res?.albums?.items,
        });
        setLoading(false);
      })
      .catch((err) => console.error(err));

    // get user info
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
  }, [user]);

  return (
    <>
      <img className="background" src={image} alt="background-img" />
      <div className="filter" />
      <main id="main">
        <Header toggleSidebar={toggleSidebar} open={open} />
        <AudioInfo title={title} image={image} />
        <MyPlayList
          newAlbums={newAlbums}
          loading={loading}
          spotifyApi={spotifyApi}
          setImage={setImage}
          setTitle={setTitle}
        />
        <Player />
        {/* <SpotifyPlayer 
          token={token}
          uris={["spotify:album:7qKY8n8wPUizIo2bfSWUEB"]}
        /> */}
      </main>
      <Sidebar open={open} />
    </>
  );
};

export default HomePage;
