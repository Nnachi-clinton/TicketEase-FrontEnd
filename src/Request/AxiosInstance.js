import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://localhost:7075/api',
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const AxiosInstance2 = axios.create({
  baseURL: 'https://localhost:7075/',
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default AxiosInstance;
