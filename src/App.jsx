import { useEffect, useState } from 'react';
import getArticlesApi from './api/articless-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { ErrorMessage } from 'formik';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ReactModal from 'react-modal';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
const [query, setQuery] = useState("")
const [showBtn, setShowBtn] = useState(false)
const [modalIsOpen, setIsOpen] = useState(false);
let subtitle;


  useEffect(() => {
    if (!query) {
      return;
    }

    const getImages = async () => {
      try {
        setError(false)
        setIsLoading(true);
        // setImages([]);

        const data = await getArticlesApi(query, page);
        // console.log('data :>> ', data);
        setImages((prevImages)=>[...prevImages, ...data]);
        setShowBtn(data.total_pages && data.total_pages !== page)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }

    }
    query && getImages();
  }, [query, page]);

  const handleSubmit = async (searchQuery) => {
    // console.log('query', query);
    setQuery (searchQuery)
    setPage(1)
    setImages([])
    
  };

const handleLoadMore = async () => { 
  setPage(page + 1)
 }

 function openModal() {
  
  setIsOpen(true);
}

function afterOpenModal() {
  
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
  
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage/>}

      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  );
}

export default App;
