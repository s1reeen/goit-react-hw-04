import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={css.galleryContainer}>
      <ul className={css.galleryGrid}>
        {images.map((image, index) => (
          <li key={`${image.id}-${index}`} className={css.galleryItem}>
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className={css.galleryImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
