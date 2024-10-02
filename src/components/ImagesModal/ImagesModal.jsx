import Modal from "react-modal";
import css from "./ImagesModal.module.css";

Modal.setAppElement("#root");

const ImagesModal = ({ isOpen, onClose, imageUrl, alt }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
      <button onClick={onClose} className={css.closeButton}>
        ✖
      </button>
      <img src={imageUrl} alt={alt} className={css.modalImage} />
    </Modal>
  );
};

export default ImagesModal;
