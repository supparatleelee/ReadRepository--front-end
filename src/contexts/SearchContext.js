import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();

  const handleChangePageBySearchSubmit = () => {
    if (searchInput === '') {
      navigate('/search');
    }
  };
  // handleChangePageBySearchSubmit();
  // Infinite Loop
  const searchQueryString = searchInput.replace(' ', '+');

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
