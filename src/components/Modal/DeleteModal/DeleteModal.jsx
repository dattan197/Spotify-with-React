const DeleteModal = ({
  type,
  playlistId,
  musicId,
  handleDelete,
  info,
  setShowConfirmModal,
}) => {
  return (
    <>
      <div
        className="dark"
        onClick={() => {
          setShowConfirmModal(false);
        }}
      ></div>

      <div className="modal-delete">
        <div className="modal-delete__close">
          <i
            className="fa fa-times close"
            onClick={() => {
              setShowConfirmModal(false);
            }}
          ></i>
        </div>
        <hr />
        <div className="modal-delete__confirm">
          <p>
            Are you sure want to delete<b> "{info}"</b>?
          </p>
        </div>
        <hr />
        <div className="modal-delete__btns">
          <div
            className="yes"
            onClick={() => {
              //handleDeletePlaylist(playlistId, true);
              handleDelete(playlistId, musicId, true, type);
            }}
          >
            Yes
          </div>
          <div
            className="cancel"
            onClick={() => {
              //handleDeletePlaylist(playlistId, false);
              handleDelete(playlistId, musicId, false, type);
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
