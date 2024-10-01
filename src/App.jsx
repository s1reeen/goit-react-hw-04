import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchArticles();
        setImages(data.results);
      } catch (error) {
        console.error("Ошибка при загрузке изображений:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Image Search</h1>
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

export default App;
