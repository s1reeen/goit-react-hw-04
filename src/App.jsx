import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImagesModal from "./components/ImageModal/ImageModal";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [hasLoadedImages, setHasLoadedImages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const getData = async (pageNum) => {
    setIsLoading(true);
    setError(false);
    try {
      const data = await fetchArticles(query, pageNum);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setHasLoadedImages(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getData(page);
    }
  }, [page, query]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setHasLoadedImages(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {hasLoadedImages && images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {hasLoadedImages && !isLoading && images.length > 0 && (
        <LoadMoreBtn onLoadMore={loadMoreImages} disable={isLoading} />
      )}
      <ImagesModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage.urls?.regular}
        alt={selectedImage.alt_description}
      />
      <ToastContainer />
    </>
  );
};

export default App;
