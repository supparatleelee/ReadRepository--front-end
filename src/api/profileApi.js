import axios from '../config/axios';

export const getAllUserCollection = (userId) =>
  axios.get(`/profile/${userId}/getAllUserCollection`);
