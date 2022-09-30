import Note from '../features/note/Note';
import ReadingActivity from '../features/readingActivity/ReadingActivity';
import BookInfo from '../layouts/bookinfo/BookInfo';
import RatesAndReviews from '../layouts/ratesAndReviews/RatesAndReviews';

function BookInfoPage() {
  let isCurrentlyReading = 1;
  return (
    <div className="margin-left-8vw w-100" style={{ height: '200vh' }}>
      <BookInfo />

      <Note />

      {isCurrentlyReading ? <ReadingActivity /> : ''}

      <RatesAndReviews />
    </div>
  );
}

export default BookInfoPage;
