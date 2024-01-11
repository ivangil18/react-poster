import { useNavigate } from "react-router-dom";
import { backdrop, modal } from "../Styles/Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }
  return (
    <>
      <div className={backdrop} onClick={closeHandler}></div>
      <dialog open className={modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
