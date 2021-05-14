import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Packages
import SpotifyWebApi from "spotify-web-api-js";
import { v4 as uuidv4 } from "uuid";
// Components
import Header from "../../components/Header/Header";
import MyPlayList from "../../components/MyPlaylists/MyPlayList";
import Player from "../../components/Player/Player";
import AudioInfo from "../../components/AudioInfo/AudioInfo";
import DeleteModal from "../../components/Modal/DeleteModal/DeleteModal";
import FormModal from "../../components/Modal/FormModal";
import AddForm from "../../components/Modal/AddModal/AddForm";

// Assets
import background from "../../assets/background.jpg";
import { addPlaylistAction, deletePlaylistAction, editPlaylistAction } from "../../redux/actions/playlistActions";
import { addMusicAction, deleteMusicAction } from "../../redux/actions/musicActions";

const spotifyApi = new SpotifyWebApi();

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [openAddModal, setOpenAddModal] = useState(null); // state to trigger open sidebar
  const [image, setImage] = useState(background); // state change image
  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title

  const [info, setInfo] = useState("");
  const [type, setType] = useState("");

  // MUSIC STATE
  const [trackUrl, setTrackUrl] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicActive, setMusicActive] = useState(null);
  const [disable, setDisable] = useState(false);
  const [musicId, setMusicId] = useState(null);
  const [addMusicInput, setAddMusicInput] = useState({ musicName: "", mp3Upload: null, imgUpload: null, playlist_id: "" });
  const [musicErrors, setMusicErrors] = useState(null);

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

  //========================================= PLAYLIST =======================================//
  function handleSelectPlaylist(id, index) {
    setPlaylistId(id);
    setPlaylistActive(index);
    if (playlistActive === index) return;
    setMusicActive(null);
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

  function onDeletePlaylist(id) {
    dispatch(deletePlaylistAction(id));
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

  //========================================= MUSIC =======================================//
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

  function onDeleteMusic(_playlistId, _musicId) {
    dispatch(deleteMusicAction(_playlistId, _musicId));
  }

  // HANDLE WHEN CLICK DELETE BUTTON
  function handleClickDelete_button(id, name, type) {
    setInfo(name);
    setType(type);
    setShowConfirmModal(true);
    if (type === "playlist") {
      setPlaylistId(id);
      return;
    }
    if (type === "music") {
      setMusicId(id);
      return;
    }
  }

  function handleDelete(_playlistid, _musicId, confirm, type) {
    if (confirm === false) {
      setShowConfirmModal(false);
      return;
    }
    if (type === "playlist") {
      onDeletePlaylist(_playlistid);
    }
    if (type === "music") {
      onDeleteMusic(_playlistid, _musicId);
    }
    setShowConfirmModal(false);
    return;
  }

  function handleInputAddMusic(e) {
    const { value, files, type, name } = e.target;
    setAddMusicInput({
      ...addMusicInput,
      [name]: type === "file" ? files[0] : value,
    });
  }

  function validateAddForm(value) {
    const error = {};
    if (!value?.musicName.trim()) {
      error.musicName = "Please input name !";
    }
    if (value?.mp3Upload === null) {
      error.mp3Upload = "Please upload mp3 file !";
    } else if (value?.mp3Upload?.type !== "audio/mpeg") {
      error.mp3Upload = "Invalid uploaded file !";
    }
    if (value?.imgUpload === null) {
      error.imgUpload = "Please upload image file !";
    } else if (value?.imgUpload?.type !== "image/jpeg" && value?.imgUpload.type !== "image/png") {
      error.imgUpload = "Invalid uploaded file !";
    }
    if (!value?.playlist_id.trim()) {
      error.playlist_id = "Please select playlist !";
    }
    return error;
  }

  function handleSubmitAddMusic(e) {
    e.preventDefault();
    const valid = { ...validateAddForm(addMusicInput) };
    setMusicErrors(valid);
    // check if there is any errors
    if (Object.keys(valid).length !== 0) {
      return;
    }
    let newMusic = {
      id: uuidv4(),
      name: addMusicInput.musicName,
      preview_url: window.URL.createObjectURL(addMusicInput.mp3Upload),
      image: window.URL.createObjectURL(addMusicInput.imgUpload),
    };
    dispatch(addMusicAction(addMusicInput.playlist_id, newMusic));
    setMusicErrors(null);
    setAddMusicInput({ musicName: "", mp3Upload: null, imgUpload: null, playlist_id: "" });
    e.target.reset();
  }

  function onClickEditMusic(id) {
    setOpenAddModal(true);
    setMusicId(id);
    setType("edit_music");
  }

  // REMOVE ACTION WHEN CLICK ANYWHERE ON THE PAGE
  function handleClickOnMain() {
    console.log("on main");
    setShowInput(false);
    setPlaylistError("");
    setEditPlaylist(false);
    setType("");
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
    if (currentPlaying == null || playlistActive == null || playlists[playlistActive]?.tracks.length === 0) return;
    let tracks = [...playlists[playlistActive]?.tracks];
    let length = tracks.length;
    if (currentPlaying >= length) {
      setCurrentPlaying(0);
      handleSelectMusic(tracks[0]?.name, tracks[0]?.image, currentPlaying, tracks[0]?.preview_url);
      return;
    }
    if (currentPlaying < 0) {
      setCurrentPlaying(length - 1);
      handleSelectMusic(tracks[length - 1]?.name, tracks[length - 1]?.image, currentPlaying, tracks[length - 1]?.preview_url);
      return;
    }
    handleSelectMusic(tracks[currentPlaying]?.name, tracks[currentPlaying]?.image, currentPlaying, tracks[currentPlaying]?.preview_url);
  }, [currentPlaying]);

  useEffect(() => {
    if (openAddModal === false) {
      setMusicErrors(null);
    }
  }, [openAddModal]);

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
    submitEditPlaylist,
    handleClickDelete_button,
  };

  // GATHER ALL MUSIC PROPS
  const musicProps = {
    tracks: playlists[playlistActive]?.tracks,
    musicActive,
    setCurrentPlaying,
    setOpenAddModal,
    handleSelectMusic,
    handleClickDelete_button,
  };

  // GATHER ALL DELETE MODAL PROPS
  const DeleteModalProps = {
    info,
    playlistId,
    musicId,
    type,
    showConfirmModal,
    setShowConfirmModal,
    handleDelete,
  };

  return (
    <>
      <img className="background" src={image} alt="background-img" />
      <div className="filter" />
      <main id="main" onClick={() => handleClickOnMain()}>
        <Header spotifyApi={spotifyApi} handleSelectMusic={handleSelectMusic} />
        <AudioInfo title={title} image={image} />
        <MyPlayList playlistProps={playlistProps} musicProps={musicProps} />
        {trackUrl ? <Player image={image} title={title} trackUrl={trackUrl} disable={disable} setCurrentPlaying={setCurrentPlaying} /> : ""}
      </main>

      {showConfirmModal ? <DeleteModal {...DeleteModalProps} /> : ""}
      {openAddModal === null ? (
        ""
      ) : (
        <FormModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal}>
          <AddForm
            setMusicErrors={setMusicErrors}
            musicErrors={musicErrors}
            playlists={playlists}
            setOpenAddModal={setOpenAddModal}
            handleSubmitAddMusic={handleSubmitAddMusic}
            handleInputAddMusic={handleInputAddMusic}
          />
        </FormModal>
      )}
    </>
  );
};

export default HomePage;