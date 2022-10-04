import SearchHeader from '../features/search/SearchHeader';
import VisitorSearchResultContainer from '../features/search/VisitorSearchResultContainer';

function VisitorSearchPage() {
  return (
    <div
      className="d-block margin-left-8vw w-84 h-100"
      style={{ position: 'relative' }}
    >
      <SearchHeader />
      <VisitorSearchResultContainer />
    </div>
  );
}

export default VisitorSearchPage;
