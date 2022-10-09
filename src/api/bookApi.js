import axios from '../config/axios';

export const getBookInfo = (olid) => axios.post(`/book/${olid}`);

export const addBookToList = (olid, readingStatus) =>
  axios.post(`/book/${olid}/addToList`, readingStatus);
export const deleteBookFromList = (olid) =>
  axios.delete(`/book/${olid}/deleteFromList`);

export const createUserNote = (olid, noteContent) =>
  axios.post(`/book/${olid}/note`, noteContent);
export const deleteUserNote = (olid) => axios.delete(`/book/${olid}/note`);
export const updateUserNote = (olid, noteContent) =>
  axios.patch(`/book/${olid}/note`, noteContent);

export const updateReadingActivity = (olid, input) =>
  axios.patch(`/book/${olid}/readingActivity`, input);
