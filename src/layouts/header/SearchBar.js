import { useSearchContext } from '../../contexts/SearchContext';

function SearchBar() {
  const { setSearchInput } = useSearchContext();

  return (
    <form class="d-flex" role="search">
      <input
        className="form-control me-2 search-icon min-w-50vh"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* <button class="btn btn-outline-success" type="submit">
        Search
      </button> */}
    </form>
  );
}

export default SearchBar;
