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
import { addMusicAction, deleteMusicAction, editMusicAction } from "../../redux/actions/musicActions";
import EditForm from "../../components/Modal/EditModal/EditForm";

const spotifyApi = new SpotifyWebApi();

function findIndexById(id, array) {
  let index = array.map((item) => item.id).indexOf(id);
  return index;
}

const HomePage = ({ token }) => {
  const dispatch = useDispatch();

  const [openAddModal, setOpenAddModal] = useState(null); // state to trigger open sidebar
  const [image, setImage] = useState(background); // state change image
  const [title, setTitle] = useState("Welcome to my Music Manager"); // state change title

  const [info, setInfo] = useState("");
  const [type, setType] = useState("");

  // MUSIC STATE
  const [totalTracks, setTotalTracks] = useState([]);
  const [trackUrl, setTrackUrl] = useState("");
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [musicActive, setMusicActive] = useState(null);
  const [disable, setDisable] = useState(false);
  const [musicId, setMusicId] = useState(null);
  const [addMusicInput, setAddMusicInput] = useState({ musicName: "", mp3Upload: null, imgUpload: null, playlist_id: "" });
  const [editMusicInput, setEditMusicInput] = useState({ musicName: "", mp3Upload: null, imgUpload: null });
  const [musicErrors, setMusicErrors] = useState(null);

  // PLAYLIST STATE
  const [playlistActive, setPlaylistActive] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [addPlaylistInput, setAddPlaylistInput] = useState("");
  const [playlistError, setPlaylistError] = useState("");
  const [editPlaylist, setEditPlaylist] = useState(false);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(5);
  const [currentTracks, setCurrentTracks] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const user = useSelector((state) => state.UserReducer.user);
  const playlists = useSelector((state) => state.PlayListsReducer.playlists);

  //================ calculate pagination
  useEffect(() => {
    console.log("total tracks ", totalTracks.length);
    if (totalTracks.length < 1) {
      setCurrentTracks(null);
      return;
    }
    const indexOfLastTrack = currentPage * tracksPerPage;
    const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
    const _currentTracks = totalTracks.slice(indexOfFirstTrack, indexOfLastTrack);
    setCurrentTracks(_currentTracks);
  }, [totalTracks, currentPage, playlists]);

  useEffect(() => {
    let _totalPages = [];
    for (let i = 1; i <= Math.ceil(totalTracks.length / tracksPerPage); i++) {
      _totalPages.push(i);
    }
    setTotalPages(_totalPages);
  }, [currentTracks]);

  function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber);
    setCurrentPlaying(null);
    setMusicActive(null);
  }

  useEffect(() => {
    if (!currentTracks) return;
    if (currentPlaying > tracksPerPage - 1) {
      setCurrentPage((current) => ++current);
    }
    if (currentPlaying < 0 && currentPage !== 1 && currentPage !== totalPages.length) {
      setCurrentPage((current) => --current);
    }
    if (currentPage === totalPages.length && currentPlaying > currentTracks.length - 1) {
      setCurrentPage(1);
    }
    if (currentPage === 1 && currentPlaying < 0) {
      setCurrentPage(totalPages.length);
      console.log(currentTracks);
    }
  }, [currentPlaying]);

  //========================================= PLAYLIST =======================================//
  function handleSelectPlaylist(id, index) {
    setPlaylistId(id);
    setPlaylistActive(index);
    setTotalTracks(playlists[index]?.tracks);
    if (playlistActive === index) return;
    setCurrentPage(1);
    setCurrentPlaying(null);
    setMusicActive(null);
  }

  useEffect(() => {
    console.log("total tracks ", totalTracks);
  }, [totalTracks]);

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
    setTotalTracks([]);
    setPlaylistActive(null);
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
  function handleSelectMusic(id, title, image, index, url) {
    console.log("id", id);
    setMusicId(id);
    setTitle((_title) => (_title = title));
    setImage((_image) => (_image = image));
    setTrackUrl(url);
    if (index == null) {
      setDisable(true); // disable prev & next button if click on music from search
      return;
    }
    setDisable(false);
    setMusicActive(index);
  }

  function onDeleteMusic(_playlistId, _musicId) {
    dispatch(deleteMusicAction(_playlistId, _musicId));
  }

  // handle reload tracks after delete any track
  useEffect(() => {
    if (playlistId === null || currentTracks === null) return;
    let indexPlaylist = findIndexById(playlistId, playlists);
    setTotalTracks(playlists[indexPlaylist]?.tracks);
    if (musicActive === null) return;
    let indexTrack = findIndexById(musicId, currentTracks);
    if (indexTrack === -1) return;
    if (indexTrack === musicActive) {
      setCurrentPlaying(null);
      setDisable(true);
      setMusicActive(null);
      return;
    }
    if (indexTrack > musicActive) {
      return;
    }
  }, [playlists]);

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
    // check if there is any errors
    setMusicErrors(valid);
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

  function onClickEditMusic(id, name, mp3, img) {
    setOpenAddModal(true);
    setMusicId(id);
    setType("edit_music");
    setEditMusicInput({ musicName: name, mp3Upload: mp3, imgUpload: img });
  }

  function handleEditInput(e) {
    let { value, files, type, name } = e.target;
    setEditMusicInput({
      ...editMusicInput,
      [name]: type === "file" ? files[0] : value,
    });
  }

  function validateEditInput(value, _currentValue) {
    let error = {};
    if (!value?.musicName.trim()) {
      error.blankError = "This field can not be blank!";
    }
    // if inputs haven't changed => nothing to update => cancel submitting
    if (value?.musicName === _currentValue?.musicName && value?.mp3Upload === _currentValue?.mp3Upload && value?.imgUpload === _currentValue?.imgUpload) {
      error.sameValueError = "Updating values are the same as current values!";
    }
    return error;
  }

  function handleSubmitEditMusic(e) {
    e.preventDefault();
    // find current values of chosen track to compare to new value
    let currentTrack = playlists[findIndexById(playlistId, playlists)]?.tracks[findIndexById(musicId, playlists[findIndexById(playlistId, playlists)]?.tracks)];
    const currentValue = {
      musicName: currentTrack?.name,
      imgUpload: currentTrack?.image,
      mp3Upload: currentTrack?.preview_url,
    };
    let errors = { ...validateEditInput(editMusicInput, currentValue) };
    setMusicErrors(errors);
    // check is there any error?
    if (Object.keys(errors).length !== 0) {
      return;
    }
    // create an update object and transform value of files to blob
    let musicUpdate = {
      id: musicId,
      name: editMusicInput.musicName,
      preview_url: typeof editMusicInput.mp3Upload === "object" ? window.URL.createObjectURL(editMusicInput.mp3Upload) : editMusicInput.mp3Upload,
      image: typeof editMusicInput.imgUpload === "object" ? window.URL.createObjectURL(editMusicInput.imgUpload) : editMusicInput.imgUpload,
    };
    dispatch(editMusicAction(playlistId, musicUpdate));
    setOpenAddModal(false);
  }

  // REMOVE ACTION WHEN CLICK ANYWHERE ON THE PAGE
  function handleClickOnMain() {
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
    console.log(currentPlaying);
    console.log(currentTracks);
    if (currentPlaying == null || playlistActive == null || currentTracks.length === 0) return;
    let tracks = [...currentTracks];
    let length = tracks.length;
    if (currentPlaying >= length) {
      setCurrentPlaying(0);
      handleSelectMusic(tracks[0]?.id, tracks[0]?.name, tracks[0]?.image, currentPlaying, tracks[0]?.preview_url);
      return;
    }
    if (currentPlaying < 0) {
      setCurrentPlaying(length - 1);
      handleSelectMusic(tracks[length - 1]?.id, tracks[length - 1]?.name, tracks[length - 1]?.image, currentPlaying, tracks[length - 1]?.preview_url);
      return;
    }
    handleSelectMusic(tracks[currentPlaying]?.id, tracks[currentPlaying]?.name, tracks[currentPlaying]?.image, currentPlaying, tracks[currentPlaying]?.preview_url);
  }, [currentPlaying, currentTracks]);

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
    totalTracks,
    totalPages,
    currentTracks,
    musicActive,
    onClickEditMusic,
    setCurrentPlaying,
    setOpenAddModal,
    handleSelectMusic,
    handleClickDelete_button,
    handleChangePage,
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
        <FormModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} setMusicErrors={setMusicErrors}>
          {type === "edit_music" ? (
            <EditForm musicErrors={musicErrors} editMusicInput={editMusicInput} setOpenAddModal={setOpenAddModal} handleEditInput={handleEditInput} handleSubmitEditMusic={handleSubmitEditMusic} />
          ) : (
            <AddForm
              setMusicErrors={setMusicErrors}
              musicErrors={musicErrors}
              playlists={playlists}
              setOpenAddModal={setOpenAddModal}
              handleSubmitAddMusic={handleSubmitAddMusic}
              handleInputAddMusic={handleInputAddMusic}
            />
          )}
        </FormModal>
      )}
    </>
  );
};

export default HomePage;
