const AddForm = ({ setMusicErrors, musicErrors, playlists, setOpenAddModal, handleSubmitAddMusic, handleInputAddMusic }) => {
  return (
    <form className="modal-add__form" onSubmit={handleSubmitAddMusic}>
      <div className="form-group">
        <label htmlFor="">Name :</label>
        <br />
        <input name="musicName" className="input-name" type="text" placeholder="name" onChange={handleInputAddMusic} />
        {musicErrors && musicErrors?.musicName && <p style={{ color: "red" }}>{musicErrors?.musicName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="">MP3 URL :</label>
        <br />
        <input name="mp3Upload" className="input-name" type="file" onChange={handleInputAddMusic} />
        {musicErrors && musicErrors?.mp3Upload && <p style={{ color: "red" }}>{musicErrors?.mp3Upload}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="">Image URL:</label>
        <br />
        <input name="imgUpload" className="input-name" type="file" onChange={handleInputAddMusic} />
        {musicErrors && musicErrors?.imgUpload && <p style={{ color: "red" }}>{musicErrors?.imgUpload}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="">Select playlist:</label>
        <br />
        <select name="playlist_id" className="form-select" onChange={handleInputAddMusic}>
          <option defaultValue="" value="" hidden>
            Choose here
          </option>
          {playlists.map((playlist) => (
            <option key={playlist?.id} value={playlist?.id}>
              {playlist?.name}
            </option>
          ))}
        </select>
        {musicErrors && musicErrors?.playlist_id && <p style={{ color: "red" }}>{musicErrors?.playlist_id}</p>}
      </div>
      <div className="form-btns">
        <button type="submit" className="btn btn-add">
          Add
        </button>
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => {
            setOpenAddModal(false);
            setMusicErrors(null);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddForm;
