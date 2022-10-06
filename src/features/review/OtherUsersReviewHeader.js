import Avatar from '../../components/ui/Avatar';

function OtherUsersReviewHeader() {
  return (
    <div className="d-flex align-items-center gap-2 p-3">
      <a href="/#">
        <Avatar size="40px" />
      </a>
      <div className="d-flex flex-column flex-fill">
        <a
          href="/#"
          className="text-dark fw-bold no-underline hover-underline text-3.5 text-decoration-none"
        >
          <span className="text-primary">Betty Lee's Review</span>
        </a>
        <small className="text-muted text-3">2m</small>
      </div>
    </div>
  );
}

export default OtherUsersReviewHeader;
