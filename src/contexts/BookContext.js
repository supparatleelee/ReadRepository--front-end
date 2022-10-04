import { createContext, useState, useContext } from 'react';
import * as bookService from '../api/bookApi';
import { useLoading } from './LoadingContext';
import { toast } from 'react-toastify';

const BookContext = createContext();

function BookContextProvider({ children }) {
  const { startLoading, stopLoading } = useLoading();
  const [bookInfo, setBookInfo] = useState({});
  const [bookCoverOLID, setBookCoverOLID] = useState('');
  const [bookAuthorName, setBookAuthorName] = useState([]);

  const getBookInfo = async (olid, authorName) => {
    try {
      startLoading();
      const res = await bookService.getBookInfo(olid);
      setBookInfo(res.data.bookInfo);
      setBookCoverOLID(olid);
      setBookAuthorName(authorName);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    } finally {
      stopLoading();
    }
  };

  return (
    <BookContext.Provider
      value={{ getBookInfo, bookInfo, bookCoverOLID, bookAuthorName }}
    >
      {children}
    </BookContext.Provider>
  );
}

const useBookContext = () => useContext(BookContext);
export { BookContext, useBookContext };

export default BookContextProvider;
