import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css"

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
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
