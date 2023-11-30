import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://localhost:7075/api',
});

AxiosInstance.interceptors.request.use(
  (configs) => {
    const token = localStorage.getItem('token');

    if (token) {
      configs.headers.Authorization = token;
    }
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
