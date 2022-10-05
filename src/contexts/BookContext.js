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

  const addBookToList = async (olid, readingStatus) => {
    try {
      const res = await bookService.addBookToList(olid, {
        readingStatus: readingStatus,
      });
      toast.success('Success add this book to your collection');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  return (
    <BookContext.Provider
      value={{
        getBookInfo,
        bookInfo,
        bookCoverOLID,
        bookAuthorName,
        addBookToList,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

const useBookContext = () => useContext(BookContext);
export { BookContext, useBookContext };

export default BookContextProvider;
