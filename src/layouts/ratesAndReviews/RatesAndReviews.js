import Rate from '../../features/rate/Rate';
import Review from '../../features/review/Review';
import RatesAndReviewsHeader from './RatesAndReviewsHeader';

function RatesAndReviews() {
  return (
    <>
      <RatesAndReviewsHeader />
      <Rate />
      <Review />
    </>
  );
}

export default RatesAndReviews;
