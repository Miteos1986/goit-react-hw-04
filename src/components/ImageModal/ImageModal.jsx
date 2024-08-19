import Modal from "react-modal";
import css from "./ImageModal.module.css"


Modal.setAppElement("#root");

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

const ImageModal = ({isOpen, closeModal, imageUrl, alt_description,description,likes }) => {
  return (
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}

      closeModal={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true} // Close on click outside
      shouldCloseOnEsc={true} // Close on ESC key press
      >
     <div className={css.modalContent}>
     <div>
        <button className={css.modalBtn} onClick={() => closeModal()}>❌</button>
        <img className={css.modalImage} src={imageUrl} alt={alt_description} 
       
        />
        
    </div>
    <p className={css.modalDescription}> description: {description}</p>
    <p className={css.modalLikes}>❤️: {likes}</p>
     </div>

    </Modal>
  )
}

export default ImageModal