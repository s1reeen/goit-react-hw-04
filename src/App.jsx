import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ImagesList from "./components/ImagesList/ImagesList";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchArticles();
        setImages(data.results);
      } catch (error) {
        console.error("Error in loading images:", error);
      }
    };
    getData();
  }, []);

  return <>{images.length && <ImagesList images={images} />}</>;
};

export default App;
