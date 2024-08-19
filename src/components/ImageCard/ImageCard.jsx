import css from "./ImageCard.module.css"

const ImageCard = ({src, alt, onClick}) => {
  return (
   
  <img className={css.galleryImage} src={src} alt={alt} onClick={onClick}/>

  )
}

export default ImageCard