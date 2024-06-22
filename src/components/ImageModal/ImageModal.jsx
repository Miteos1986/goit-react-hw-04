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
  };

const ImageModal = ({isOpen, closeModal, imageUrl, alt_description }) => {
  return (
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      >
      <div>
        <img src={imageUrl} alt={alt_description} />
    </div>
    </Modal>
  )
}

export default ImageModal