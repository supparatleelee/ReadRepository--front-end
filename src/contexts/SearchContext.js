import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import * as searchService from '../api/searchApi';

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);

  const searchBooksList = async (bookTitle) => {
    try {
      if (bookTitle === '') {
        return toast.error('Input Book Title');
      }

      const res = await searchService.getBooksList({ bookTitle: bookTitle });
      setSearchResults(res.data.searchBooksList.docs);
      toast.success('Success extract data from Open Library API');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
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
