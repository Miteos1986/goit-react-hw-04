import axios from "axios"
const getArticlesApi = async () => { 
    const {data} = await axios.get("https://api.unsplash.com/photos/?client_id=dcI-k11rZgt38IFWDOqbLJwLkmaCnuFfeGPG7GxFxSY")
return data
 }
export default getArticlesApi