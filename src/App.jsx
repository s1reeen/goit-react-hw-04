import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("moon"); // Начальный запрос

  const getData = async (query, pageNum) => {
    setIsLoading(true);
    try {
      const data = await fetchArticles(query, pageNum);
      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(query, page);
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]); // Сбрасываем изображения при новом поиске
    setPage(1); // Сбрасываем страницу на 1
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {!isLoading && (
        <LoadMoreBtn onLoadMore={loadMoreImages} disable={isLoading} />
      )}
    </>
  );
};

export default App;
