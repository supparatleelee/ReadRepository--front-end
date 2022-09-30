import ReviewForm from './ReviewForm';
import UserReview from './UserReview';

function Review() {
  let review = 0;
  return <>{review ? <UserReview /> : <ReviewForm />}</>;
}

export default Review;
