import SearchResultItem from './SearchResultItem';

function SearchResultContainer() {
  return (
    <div className="h-80 border-radius-10px">
      {/* .map here */}
      {/* {bookList.map((item) => (
        <SearchResultItem />
      ))} */}
      <div className="d-flex flex-wrap">
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    </div>
  );
}

export default SearchResultContainer;
