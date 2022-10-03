import axios from '../config/axios';

export const getBooksList = (bookTitle) => axios.post('/search', bookTitle);
