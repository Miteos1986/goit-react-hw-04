import Modal from "react-modal";


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
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true} // Close on click outside
      shouldCloseOnEsc={true} // Close on ESC key press
      >
      <div>
        <img src={imageUrl} alt={alt_description} 
       
        />
        
    </div>
    <p> description:{description}</p>
    <p>Likes: {likes}</p>

    </Modal>
  )
}

export default ImageModal