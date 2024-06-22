import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={()=>openModal(image)}
            
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
