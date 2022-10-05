import axios from '../config/axios';

export const getBookInfo = (olid) => axios.post(`/book/${olid}`);

export const addBookToList = (olid, readingStatus) =>
  axios.post(`/book/${olid}/addToList`, readingStatus);
