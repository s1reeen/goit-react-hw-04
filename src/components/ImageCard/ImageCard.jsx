import css from "./ImageCard.module.css";

const ImageCard = ({ card, onImgClick }) => {
  return (
    <div className={css.card} onClick={() => onImgClick(card)}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
      />
    </div>
  );
};

export default ImageCard;
