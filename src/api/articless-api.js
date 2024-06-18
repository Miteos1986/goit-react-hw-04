import axios from "axios"

const API_KEY = "dcI-k11rZgt38IFWDOqbLJwLkmaCnuFfeGPG7GxFxSY"

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
    per_page: 10,
  };


const getArticlesApi = async (query, page) => { 
    const {data} = await axios.get(`search/photos`, {
        params: {
            query: query,
        page: page,
        }
    })
return data.results
 }
export default getArticlesApi