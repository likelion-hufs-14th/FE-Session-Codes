import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://fe-server-production.up.railway.app',
});

export default axiosInstance;
