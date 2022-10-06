import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';
import UserReview from './UserReview';

function Review() {
  let review = 0;
  return (
    <>
      {review ? <UserReview /> : <ReviewForm />}
      <ReviewsContainer />
    </>
  );
}

export default Review;
