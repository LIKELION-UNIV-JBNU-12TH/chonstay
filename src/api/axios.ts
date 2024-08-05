import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://43.201.104.222:5000',
  withCredentials: true,
});

export default axiosInstance;
