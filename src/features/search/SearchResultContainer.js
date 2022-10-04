import { useSearchContext } from '../../contexts/SearchContext';
import SearchResultItem from './SearchResultItem';

function SearchResultContainer() {
  const { searchResults } = useSearchContext(); //[{...}, {...}, {...}]
  // console.log(searchResults, 'search results');

  return (
    <div
      className="border-radius-10px bg-white"
      style={{ marginBottom: '100px' }}
    >
      <div className="d-flex flex-wrap">
        {searchResults.map((item, index) => (
          <SearchResultItem
            key={index}
            title={searchResults[index].title}
            authorName={searchResults[index].author_name}
            coverOLID={searchResults[index].cover_edition_key}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResultContainer;
