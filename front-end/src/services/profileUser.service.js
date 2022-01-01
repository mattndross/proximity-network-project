import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://proximity-network-api.herokuapp.com';


// Store Profile
const getLoggedProfile = () => {
    return axios.get(API_URL + '/logged/stores', { headers: authHeader() });
}

const updateProfile = (obj) => {
    return axios.put(API_URL + '/stores/profiles', { ...obj }, { headers: authHeader() });
}

// Update Password

const updatePassword = (obj) => {
    return axios.put(API_URL + '/stores/authentications/passwords', { ...obj }, { headers: authHeader() });
}

// Store product


const getProducts = () => {
    return axios.get(API_URL + '/products', { headers: authHeader() });
}

const deleteProduct = (id) => {
    return axios.delete(API_URL + `/products/${id}`, { headers: authHeader() });
}

const updateProduct = (id, obj) => {
    return axios.put(API_URL + `/stores/products/${id}`, { ...obj }, { headers: authHeader() });
}

const addProduct = (obj) => {
    return axios.post(API_URL + `/stores/products`, { ...obj }, { headers: authHeader() });
}



export default {
    getLoggedProfile,
    updateProfile,
    getProducts,
    deleteProduct,
    updatePassword,
    updateProduct,
    addProduct
}