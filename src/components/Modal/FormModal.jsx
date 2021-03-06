import "./formModal.scss";

const FormModal = (props) => {
  return (
    <>
      <div
        className={`dark-add ${
          props.openAddModal ? "active-dark" : "default-dark"
        }`}
        onClick={() => {
          props.setOpenAddModal(false);
        }}
      ></div>
      <div
        className={`modal-add ${
          props.openAddModal ? "active-modal" : "default"
        } `}
      >
        {props.children}
      </div>
    </>
  );
};

export default FormModal;
