import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Packages
import SpotifyWebApi from "spotify-web-api-js";
import { v4 as uuidv4 } from "uuid";

// Components
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MyPlayList from "../../components/MyPlaylists/MyPlayList";
import Player from "../../components/Player/Player";
import AudioInfo from "../../components/AudioInfo/AudioInfo";

// Assets
import background from "../../assets/background.jpg";
import {
  addPlaylistAction,
  deletePlaylistAction,
  editPlaylistAction,
} from "../../redux/actions/playlistActions";

const spotifyApi = new SpotifyWebApi();

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // state to trigger open sidebar
  const [image, setImage] = useState(background); // state change image
  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title

  // TRACKS STATE
  const [trackUrl, setTrackUrl] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicActive, setMusicActive] = useState(null);
  const [disable, setDisable] = useState(false);

  // PLAYLIST STATE
  const [playlistActive, setPlaylistActive] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [addPlaylistInput, setAddPlaylistInput] = useState("");
  const [playlistError, setPlaylistError] = useState("");
  const [editPlaylist, setEditPlaylist] = useState(false);

  const user = useSelector((state) => state.UserReducer.user);
  const playlists = useSelector((state) => state.PlayListsReducer.playlists);

  //console.log(playlists);

  function toggleSidebar() {
    setOpen((_open) => !_open);
  }

  function handleSelectPlaylist(index) {
    setPlaylistActive(index);
    if (playlistActive === index) return;
    setMusicActive(null);
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

  function validateAddPlaylistInput(value) {
    if (value) return true;
    return false;
  }

  function handleAddPlaylist(playlistName) {
    let valid = validateAddPlaylistInput(playlistName);
    if (!valid) {
      setPlaylistError("This field can not be blank!");
      return;
    }
    let newPlaylist = {
      id: uuidv4(),
      name: playlistName,
      tracks: [],
    };
    dispatch(addPlaylistAction(newPlaylist));
    setPlaylistActive((index) => ++index);
    setShowInput(false);
    setAddPlaylistInput("");
    setPlaylistError("");
  }

  function handleClickDelPlaylist(id) {
    setShowConfirmModal(true);
    setPlaylistId(id);
  }

  function handleDeletePlaylist(id, confirm) {
    if (confirm) {
      dispatch(deletePlaylistAction(id));
      setShowConfirmModal(false);
      setPlaylistActive((_index) => --_index);
      return;
    }
    setShowConfirmModal(false);
    return;
  }

  function submitEditPlaylist(e, id, playlistName, callback1, callback2) {
    e.preventDefault();
    if (playlistName.trim() === "") {
      callback2("This field can not be blank!"); // set error for specific input
      return;
    }
    dispatch(editPlaylistAction(id, playlistName));
    callback1(false); // disable input after submit success
    callback2("");
  }

  // REMOVE ACTION WHEN CLICK ANYWHERE ON THE PAGE
  function handleClickOnMain() {
    setShowInput(false);
    setPlaylistError("");
    setEditPlaylist(false);
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
    if (
      currentPlaying == null ||
      playlistActive == null ||
      playlists[playlistActive]?.tracks.length === 0
    )
      return;
    let tracks = [...playlists[playlistActive]?.tracks];
    let length = tracks.length;
    if (currentPlaying >= length) {
      setCurrentPlaying(0);
      handleSelectMusic(
        tracks[0]?.name,
        tracks[0]?.images[0]?.url,
        currentPlaying,
        tracks[0]?.preview_url
      );
      return;
    }
    if (currentPlaying < 0) {
      setCurrentPlaying(length - 1);
      handleSelectMusic(
        tracks[length - 1]?.name,
        tracks[length - 1]?.images[0]?.url,
        currentPlaying,
        tracks[length - 1]?.preview_url
      );
      return;
    }
    handleSelectMusic(
      tracks[currentPlaying]?.name,
      tracks[currentPlaying]?.images[0]?.url,
      currentPlaying,
      tracks[currentPlaying]?.preview_url
    );
  }, [currentPlaying]);


  // GATHER ALL PLAYLIST PROPS
  const playlistProps = {
    playlists,
    playlistActive,
    showInput,
    addPlaylistInput,
    playlistError,
    editPlaylist,
    setShowInput,
    setShowConfirmModal,
    setAddPlaylistInput,
    setEditPlaylist,
    handleSelectPlaylist,
    handleAddPlaylist,
    handleClickDelPlaylist,
    submitEditPlaylist,
  };

  // GATHER ALL MUSIC PROPS
  const musicProps = {
    tracks: playlists[playlistActive]?.tracks,
    musicActive,
    setCurrentPlaying,
    handleSelectMusic,
  };

  return (
    <>
      <img className="background" src={image} alt="background-img" />
      <div className="filter" />
      <main id="main" onClick={() => handleClickOnMain()}>
        <Header
          toggleSidebar={toggleSidebar}
          open={open}
          spotifyApi={spotifyApi}
          handleSelectMusic={handleSelectMusic}
        />
        <AudioInfo title={title} image={image} />
        <MyPlayList playlistProps={playlistProps} musicProps={musicProps} />
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

      {showConfirmModal ? (
        <>
          <div
            className="dark"
            onClick={() => {
              setShowConfirmModal(false);
            }}
          ></div>

          <div className="modal">
            <div className="modal__close">
              <i className="fa fa-times close"></i>
            </div>
            <hr />
            <div className="modal__confirm">
              <p>Are you sure want to delete?</p>
            </div>
            <hr />
            <div className="modal__btns">
              <div
                className="yes"
                onClick={() => {
                  handleDeletePlaylist(playlistId, true);
                }}
              >
                Yes
              </div>
              <div
                className="cancel"
                onClick={() => {
                  handleDeletePlaylist(playlistId, false);
                }}
              >
                Cancel
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {/* <Sidebar
        open={open}
        playlistProps={playlistProps}
        musicProps={musicProps}
      /> */}
    </>
  );
};

export default HomePage;
