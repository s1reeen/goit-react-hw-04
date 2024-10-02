import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryGrid}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} className={css.galleryItem}>
            <img
              src={image.urls.regular}
              className={css.galleryImage}
              onClick={() => onImageClick(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
