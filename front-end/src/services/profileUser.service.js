import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/';



const getLoggedProfile = () => {
    return axios.get(API_URL + 'logged/stores', { headers: authHeader() });
}




export default {
    getLoggedProfile
}