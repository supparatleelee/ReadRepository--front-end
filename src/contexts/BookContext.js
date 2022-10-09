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
  const [userNoteRes, setUserNoteRes] = useState({});
  const [readingProgress, setReadingProgress] = useState('');

  const getBookInfo = async (olid, authorName) => {
    try {
      startLoading();
      const res = await bookService.getBookInfo(olid);
      setBookInfo(res.data.bookInfo);
      setBookCoverOLID(olid);
      setBookAuthorName(authorName);
      setThisBookStatus(res.data.bookStatus);
      setUserNote(res.data.userNote);
      setReadingProgress(res.data.bookReadingActivity);
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
      setThisBookStatus(readingStatus);
      toast.success('Success add this book to your collection');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  const deleteBookFromList = async (olid) => {
    try {
      await bookService.deleteBookFromList(olid);
      setThisBookStatus('');
      toast.success('Success delete this book from your collection');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  const createUserNote = async (olid, noteContent) => {
    try {
      if (noteContent === '') {
        return toast.error('Input Your Note before Submitting');
      }

      const res = await bookService.createUserNote(olid, {
        noteContent: noteContent,
      });
      setUserNote(noteContent);
      setUserNoteRes(res.data.note.createdAt);
      toast.success('Success add your note with this book');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  const deleteUserNote = async (olid) => {
    try {
      await bookService.deleteUserNote(olid);
      setUserNote('');
      toast.success('Success delete your note with this book');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  const updateUserNote = async (olid, noteContent) => {
    try {
      const res = await bookService.updateUserNote(olid, {
        noteContent: noteContent,
      });
      setUserNote(noteContent);
      setUserNoteRes(res.data.note.updatedAt);
      toast.success('Success edit your note with this book');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  const updateReadingActivity = async (olid, input) => {
    try {
      const res = await bookService.updateReadingActivity(olid, input);
      setReadingProgress(res.data.readingProgress);
    } catch (err) {
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
        createUserNote,
        deleteUserNote,
        updateUserNote,
        setThisBookStatus,
        deleteBookFromList,
        userNoteRes,
        updateReadingActivity,
        readingProgress,
        setReadingProgress,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

const useBookContext = () => useContext(BookContext);
export { BookContext, useBookContext };

export default BookContextProvider;
