import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../../contexts/SearchContext';

function SearchBar() {
  const { searchBooksList } = useSearchContext();

  const searchInputEl = useRef();
  const navigate = useNavigate();

  const handleKeyUpEnter = async (e) => {
    if (e.key === 'Enter') {
      await searchBooksList(e.target.value);
      navigate('/search');
      searchInputEl.current.value = '';
    }
  };

  return (
    <div className="d-flex" role="search">
      <input
        className="form-control me-2 search-icon min-w-50vh"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        ref={searchInputEl}
        onKeyUp={handleKeyUpEnter}
      />
      {/* <button class="btn btn-outline-primary" type="submit">
        Search
      </button> */}
    </div>
  );
}

export default SearchBar;
