import axios from 'axios';
import { getAccessToken, removeAccessToken } from '../utility/localStorage';
import { API_ENDPOINT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINT_URL;

// axios.interceptors.request.use(config => {}, err => {})
axios.interceptors.request.use(
  //out
  (config) => {
    // if (config.url === '/auth/login') return config;
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      removeAccessToken();
      return window.location.replace('/'); // .replace (can't go back) vs .assign // cannot use useNavigate as this file is not component function
    }
    return Promise.reject(err);
  }
);

export default axios;
