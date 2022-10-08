import Note from '../features/note/Note';
import ReadingActivity from '../features/readingActivity/ReadingActivity';
import BookInfo from '../layouts/bookinfo/BookInfo';
import RatesAndReviews from '../layouts/ratesAndReviews/RatesAndReviews';

function BookInfoPage() {
  return (
    <div className="margin-left-8vw w-100">
      <BookInfo />

      <Note />

      <ReadingActivity />

      <RatesAndReviews />
    </div>
  );
}

export default BookInfoPage;
