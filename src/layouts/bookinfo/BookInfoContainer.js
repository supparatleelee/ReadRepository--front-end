import BookCoverAndButtons from './BookCoverAndButtons';
import BookInfoDetails from './BookInfoDetails';

function BookInfoContainer() {
  return (
    <div className="h-26 d-flex mt-4" style={{ animation: 'fadeOpen 2s' }}>
      <BookCoverAndButtons />
      <BookInfoDetails />
    </div>
  );
}

export default BookInfoContainer;
