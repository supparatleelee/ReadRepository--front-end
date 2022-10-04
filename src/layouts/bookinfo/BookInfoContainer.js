import { useBookContext } from '../../contexts/BookContext';
import BookCoverAndButtons from './BookCoverAndButtons';
import BookInfoDetails from './BookInfoDetails';

function BookInfoContainer() {
  const { bookInfo } = useBookContext();

  return (
    <div className="h-26 d-flex mt-4" style={{ animation: 'fadeOpen 2s' }}>
      <BookCoverAndButtons />
      <BookInfoDetails
        title={bookInfo.title}
        // authorName={bookInfo.authors} // 0 : {key: '/authors/OL7612885A'} <- if want to do Author User Account later.
        description={bookInfo.subtitle}
        publishDate={bookInfo.publish_date}
        subject={bookInfo.subjects}
      />
    </div>
  );
}

export default BookInfoContainer;
