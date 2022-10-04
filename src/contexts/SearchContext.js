import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import * as searchService from '../api/searchApi';
import { useLoading } from './LoadingContext';

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const { startLoading, stopLoading } = useLoading();

  const searchBooksList = async (bookTitle) => {
    try {
      startLoading();
      if (bookTitle === '') {
        return toast.error('Input Book Title');
      }

      const res = await searchService.getBooksList({ bookTitle: bookTitle });
      setSearchResults(res.data.searchBooksList.docs);
      toast.success('Success extract data from Open Library API');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    } finally {
      stopLoading();
    }
  };

  return (
    <SearchContext.Provider value={{ searchBooksList, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearchContext = () => useContext(SearchContext);
export { SearchContext, useSearchContext };

export default SearchContextProvider;
