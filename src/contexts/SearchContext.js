import { createContext, useContext, useState } from 'react';
const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;

export const useSearchContext = () => {
  return useContext(SearchContext);
};
