import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/SearchBar/Searchbar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchArticles();
        setImages(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Searchbar />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default App;
