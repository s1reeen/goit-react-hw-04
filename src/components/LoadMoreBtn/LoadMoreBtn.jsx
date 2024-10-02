import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.loadButton} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
