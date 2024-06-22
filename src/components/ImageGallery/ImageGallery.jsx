import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image, onImageClick) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={()=>onImageClick(image)}
            
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
