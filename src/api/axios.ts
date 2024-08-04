import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://Springboot-developer-env.eba-vvwtgdrj.ap-northeast-2.elasticbeanstalk.com',
  withCredentials: true,
});

export default axiosInstance;
