import SearchHeader from '../features/search/SearchHeader';
import SearchPagination from '../features/search/SearchPagination';
import SearchResultContainer from '../features/search/SearchResultContainer';

function SearchPage() {
  return (
    <div
      className="margin-left-8vw w-100 h-100"
      style={{ position: 'relative' }}
    >
      <SearchHeader />
      <SearchResultContainer />
      {/* <SearchPagination /> */}
    </div>
  );
}

export default SearchPage;
