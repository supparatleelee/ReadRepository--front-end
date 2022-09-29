import SearchResultItem from './SearchResultItem';

function SearchResultContainer() {
  return (
    <div className="h-80 mt-3 border-radius-10px">
      {/* .map here */}
      {/* {bookList.map((item) => (
        <SearchResultItem />
      ))} */}
      <div className="d-flex justify-content-center">
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
      <div className="d-flex justify-content-center mt-1">
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
        <SearchResultItem />
      </div>
    </div>
  );
}

export default SearchResultContainer;
