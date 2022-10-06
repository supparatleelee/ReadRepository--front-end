import { Comment, Like } from '../../assets/icons';

function OtherUsersReviewFooter() {
  return (
    <div className="p-3 d-flex gap-4 align-items-center text-primary">
      <div>
        <Like />
        <span style={{ marginLeft: '10px' }}>19 likes</span>
      </div>

      <div>
        <Comment />
        <span style={{ marginLeft: '10px' }}>2 Comments</span>
      </div>
    </div>
  );
}

export default OtherUsersReviewFooter;
