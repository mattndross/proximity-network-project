import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000';


// Store Profile
const getLoggedProfile = () => {
    return axios.get(API_URL + '/logged/stores', { headers: authHeader() });
}


// Store product


const getProducts = () => {
    return axios.get(API_URL + '/products', { headers: authHeader() });
}

const deleteProduct = (id) => {
    return axios.delete(API_URL + `/products/${id}`, { headers: authHeader() });
}



export default {
    getLoggedProfile,
    getProducts,
    deleteProduct
}