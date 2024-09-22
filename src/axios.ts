// src/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jejugudgo.xyz',
    withCredentials: true,
    timeout: 1000,
});

export default axiosInstance;