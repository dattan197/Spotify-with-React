const EditForm = ({ musicErrors, editMusicInput, setOpenAddModal, handleEditInput, handleSubmitEditMusic }) => {
  return (
    <form className="modal-add__form" onSubmit={handleSubmitEditMusic}>
      {musicErrors && musicErrors?.sameValueError && <p style={{ color: "red" }}>{musicErrors?.sameValueError}</p>}
      <div className="form-group">
        <label htmlFor="">Name :</label>
        <br />
        <input name="musicName" className="input-name" type="text" value={editMusicInput?.musicName} placeholder="name" onChange={handleEditInput} />
        {musicErrors && musicErrors?.blankError && <p style={{ color: "red" }}>{musicErrors?.blankError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="">MP3 URL :</label>
        <br />
        <input name="mp3Upload" className="input-name" type="file" onChange={handleEditInput} />
      </div>
      <div className="form-group">
        <label htmlFor="">Image URL:</label>
        <br />
        <input name="imgUpload" className="input-name" type="file" onChange={handleEditInput} />
      </div>
      <div className="form-btns">
        <button type="submit" className="btn btn-update">
          Update
        </button>
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => {
            setOpenAddModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
