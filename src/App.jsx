import { useEffect, useState } from "react"
import getArticlesApi from "./api/articless-api"
import ImageGallery from "./components/ImageGallery/ImageGallery"





function App() {
// image render
  const [images, setImages] = useState([])
  // loading render
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getImages = async () => {

      try {
        setIsLoading(true)
  
        const data = await getArticlesApi()
        console.log('data :>> ', data);
        setImages(data)
  
                
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }

    }
    getImages()
  },[])

 
return <>
{error && (
  <p>
    <b>Oooops...some error</b>
  </p>
) }

{images.length > 0&& (
<ImageGallery images={images} />
)
}
{isLoading && (<p>
  <b>loading...</b>
</p>)}
</>


}

export default App;
