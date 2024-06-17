import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard
            src="{images.urls.small}"
            alt="{images.alt_description}"
            
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
