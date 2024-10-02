import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryGrid}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} className={css.galleryItem}>
            <ImageCard card={image} onImgClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
