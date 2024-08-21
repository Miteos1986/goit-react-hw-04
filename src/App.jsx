import { useEffect, useState } from 'react';
import getArticlesApi from './api/articless-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage  from './components/ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setError(false);
        setIsLoading(true);
        // setImages([]);

        const data = await getArticlesApi(query, page);
        // console.log('data :>> ', data);
        setImages(prevImages => [...prevImages, ...data]);
        // console.log('data.total_pages:', data.total_pages, 'page:', page);
        setShowBtn( page > 0) ;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = async searchQuery => {
    // console.log('query', query);
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setSelectImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectImage('');
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          closeModal={closeModal}
          imageUrl={selectImage.urls.regular}
          alt_description={selectImage.alt_description}
          description={selectImage.description}
          likes={selectImage.likes}
        />
      )}
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
