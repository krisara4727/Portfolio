import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV !== "development"? "https://portfolio-backend-liard-chi.vercel.app/api":'http://localhost:5000/api',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token or other headers here
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;