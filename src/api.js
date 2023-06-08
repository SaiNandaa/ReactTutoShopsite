const BASE_URL = "https://fakestoreapi.com";
import axios from 'axios';
export const getData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}${url}`);
    return data;
}
