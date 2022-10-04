import axios from '../config/axios';

export const getBookInfo = (olid) => axios.post(`/book/${olid}`);
