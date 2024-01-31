import axios from 'axios';
import { API_BEARER } from '@env'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_BEARER
    }
});

export default api