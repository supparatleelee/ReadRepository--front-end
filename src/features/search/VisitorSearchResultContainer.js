import { useSearchContext } from '../../contexts/SearchContext';
import VisitorSearchResultItem from './VisitorSearchResultItem';

function VisitorSearchResultContainer() {
  const { searchResults } = useSearchContext();
  console.log(searchResults, 'search results');

  return (
    <div
      className="border-radius-10px bg-white"
      style={{ marginBottom: '100px' }}
    >
      <div className="d-flex flex-wrap justify-content-around">
        {searchResults.map((item, index) => (
          <VisitorSearchResultItem
            key={index}
            title={searchResults[index].title}
            authorName={searchResults[index].author_name}
            coverOLID={searchResults[index].cover_edition_key}
            OLIDkey={searchResults[index].key}
          />
        ))}
      </div>
    </div>
  );
}

export default VisitorSearchResultContainer;
