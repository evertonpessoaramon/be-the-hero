import axios from 'axios';

const api = axios.create({
    baseURL: 'HTTP://192.168.0.4:3333'
});

export default api;