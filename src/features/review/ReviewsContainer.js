import { ArrowDownPrimary, HideComment } from '../../assets/icons';
import OtherUsersReview from './OtherUsersReview';

function ReviewsContainer() {
  return (
    <div className="border border-grey border-radius-10px w-100 bg-white mt-5 mb-5">
      <OtherUsersReview />
      <OtherUsersReview />
      <OtherUsersReview />

      <HideComment />
    </div>
  );
}

export default ReviewsContainer;
