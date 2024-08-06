import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://43.201.104.222:5000/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});

export default axiosInstance;
