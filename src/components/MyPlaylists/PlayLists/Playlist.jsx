import { useEffect, useState } from "react";

const Playlist = ({
  handleClickDelete_button,
  playlist,
  handleSelectPlaylist,
  playlistActive,
  index,
  editPlaylist,
  setEditPlaylist,
  submitEditPlaylist,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(playlist?.name);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editPlaylist === false) {
      setIsEdit(false);
      setValue(playlist?.name);
      setError("");
    }
  }, [editPlaylist]);

  return (
    <li
      className={`playlist__item ${
        playlistActive === index ? "active-item" : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        handleSelectPlaylist(playlist?.id, index);
      }}
    >
      {/* <p className="playlist__name">{playlist?.name}</p> */}
      <form
        onSubmit={(e) => {
          console.log("submit");
          submitEditPlaylist(e, playlist?.id, value, setIsEdit, setError);
        }}
      >
        <input
          id={`playlist-name-${index}`}
          type="text"
          className={`edit-input ${isEdit ? "editable" : ""}`}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          disabled={!isEdit}
          style={{ color: `${playlistActive === index ? "#fff" : ""}` }}
        />
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
      <div
        className={`settings ${
          playlistActive === index ? "active-settings" : ""
        }`}
      >
        <label htmlFor={`playlist-name-${index}`}>
          {isEdit ? (
            <i
              className="fa fa-check"
              onClick={(e) => {
                //e.stopPropagation();
                submitEditPlaylist(e, playlist?.id, value, setIsEdit, setError);
              }}
            ></i>
          ) : (
            <i
              className="fa fa-edit"
              onClick={(e) => {
                e.stopPropagation();
                setEditPlaylist(true);
                setIsEdit(true);
              }}
            ></i>
          )}
        </label>
        <i
          className="fa fa-trash-alt"
          onClick={(e) => {
            e.stopPropagation();
            handleClickDelete_button(playlist?.id, playlist?.name, "playlist");
          }}
        ></i>
      </div>
    </li>
  );
};

export default Playlist;
