import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ImagesList from "./components/ImagesList/ImagesList";
import { ThreeDots } from "react-loader-spinner";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchArticles();
        setImages(data.results);
      } catch (error) {
        console.error("Error in loading images:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {images.length > 0 && <ImagesList images={images} />}
      {isLoading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <p>There was an error loading the images</p>}
    </>
  );
};

export default App;
