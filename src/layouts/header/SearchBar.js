import { useRef } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';

function SearchBar() {
  const searchInputEl = useRef();

  const { setSearchInput } = useSearchContext();

  const handleKeyUpEnter = (e) => {
    if (e.key === 'ArrowRight') {
      setSearchInput(e.target.value);
      searchInputEl.current.value = '';
    }
  };

  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 search-icon min-w-50vh"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        // onChange={(e) => setSearchInput(e.target.value)}
        ref={searchInputEl}
        onKeyUp={handleKeyUpEnter}
      />
      {/* <button class="btn btn-outline-primary" type="submit">
        Search
      </button> */}
    </form>
  );
}

export default SearchBar;
