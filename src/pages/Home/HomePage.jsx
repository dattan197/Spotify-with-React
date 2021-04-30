import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Library
//import SpotifyPlayer from "react-spotify-web-playback";
// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewReleases from "../../components/NewReleases/NewReleases";
import Player from "../../components/Player/Player";
import AudioInfo from "../../components/AudioInfo/AudioInfo";
// Redux-actions
import { getNewRelease_Request } from "../../redux/actions/BrowseAction";
// Assets
import background from "../../assets/background.jpg";

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // state to trigger open sidebar

  const [loading, setLoading] = useState(true); // state to set loading

  const [image, setImage] = useState(background); // state change image

  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title

  const newAlbums = useSelector((state) => state.BrowseReducer.albums);

  function toggleSidebar() {
    setOpen((_open) => !_open);
  }

  function handleChangeImage(img) {
    setImage((_img) => (_img = img));
  }

  function handleChangeTitle(title) {
    setTitle((_title) => (_title = title));
  }

  function handleSeclectAlbum(album) {
    handleChangeImage(album?.images[0]?.url);
    handleChangeTitle(album?.name);
  }

  useEffect(() => {
    // request API to get new releases
    dispatch(getNewRelease_Request(setLoading, token));
  }, [token]);

  return (
    <>
      <img className="background" src={image} alt="background-img" />
      <div className="filter" />
      <main id="main">
        <Header toggleSidebar={toggleSidebar} open={open} />
        <AudioInfo title={title} image={image} />
        <NewReleases newAlbums={newAlbums} loading={loading} handleSeclectAlbum={handleSeclectAlbum} />
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