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
  const [thisBookStatus, setThisBookStatus] = useState('');
  const [userNote, setUserNote] = useState('');

  const getBookInfo = async (olid, authorName) => {
    try {
      startLoading();
      const res = await bookService.getBookInfo(olid);
      console.log(res.data);
      setBookInfo(res.data.bookInfo);
      setBookCoverOLID(olid);
      setBookAuthorName(authorName);
      setThisBookStatus(res.data.bookStatus);
      setUserNote(res.data.userNote);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    } finally {
      stopLoading();
    }
  };

  const addBookToList = async (olid, readingStatus) => {
    try {
      await bookService.addBookToList(olid, {
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
        thisBookStatus,
        userNote,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

const useBookContext = () => useContext(BookContext);
export { BookContext, useBookContext };

export default BookContextProvider;
