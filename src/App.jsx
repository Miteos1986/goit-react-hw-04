import { useEffect, useState } from 'react';
import getArticlesApi from './api/articless-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  // image render
  const [images, setImages] = useState([]);
  // loading render
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // if (!query) {
    //   return;
    // }

    const getImages = async () => {};
    getImages();
  }, []);

  const handleSubmit = async query => {
    console.log('query', query);
    try {
      setIsLoading(true);
      setImages([]);
      const data = await getArticlesApi(query);
      console.log('data :>> ', data);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <p>
          <b>Oooops...some error</b>
        </p>
      )}

      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
