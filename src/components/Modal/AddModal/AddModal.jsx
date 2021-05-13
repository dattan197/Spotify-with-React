import { useEffect } from "react";
import "./addModal.scss";

const AddModal = ({ openAddModal, setOpenAddModal }) => {
  function uploadImg(e) {
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files[0]) {
      var img = document.querySelector("#myImg");
      console.log(img);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(e.target.files[0]);
      console.log(img.src);
      localStorage.setItem("file", URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <div
        className={`dark-add ${openAddModal ? "active-dark" : "default-dark"}`}
        onClick={() => {
          setOpenAddModal(false);
        }}
      ></div>
      <div
        className={`modal-add ${openAddModal ? "active-modal" : "default"} `}
      >
        <img id="myImg" src="#" style={{ width: 50, height: 50 }} />
        <form class="modal-add__form" action="">
          <div className="form-group">
            <label htmlFor="">Name :</label>
            <br />
            <input className="input-name" type="text" placeholder="name" />
          </div>
          <div className="form-group">
            <label htmlFor="">URL :</label>
            <br />
            <input className="input-name" type="text" placeholder="url link" />
          </div>
          <div className="form-group">
            <label htmlFor="">Image :</label>
            <br />
            <input
              className="input-name"
              type="text"
              placeholder="image link"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Image :</label>
            <br />
            <input
              className="input-name"
              type="file"
              placeholder="image link"
              onChange={(e) => {
                uploadImg(e);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModal;
