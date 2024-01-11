import { backdrop, modal } from "../Styles/Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={backdrop} onClick={onClose}></div>
      <dialog open className={modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
