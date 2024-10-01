const ImagesList = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.urls.regular} alt={image.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
