import UserReviewContent from './UserReviewContent';
import UserReviewFooter from './UserReviewFooter';
import UserReviewHeader from './UserReviewHeader';

function UserReview() {
  return (
    <div className="border border-grey border-radius-10px w-100 bg-white mt-4">
      <UserReviewHeader />
      <UserReviewContent />
      <UserReviewFooter />
    </div>
  );
}

export default UserReview;
