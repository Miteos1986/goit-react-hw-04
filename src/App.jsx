import { useEffect, useState } from "react"
import getArticlesApi from "./api/articless-api"
import ImageGallery from "./components/ImageGallery/ImageGallery"





function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    const getImages = async () => {
      const data = await getArticlesApi()
      console.log('data :>> ', data);
      setImages(data)
    }
    getImages()
  },[])

 
return <>{images.length > 0&& (
<ImageGallery images={images} />
)
}
</>


}

export default App;
