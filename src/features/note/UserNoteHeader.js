import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function UserNoteHeader() {
  const {
    user: { firstName, lastName },
  } = useAuth();

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
          <span className="text-primary">
            {firstName + ' ' + lastName}'s Note
          </span>
        </a>
        <small className="text-muted text-3">2m</small>
      </div>
      <div className="user-note-tools d-flex">
        <button className="user-note-tool-item no-button-style text-secondary">
          Edit
        </button>
        <button className="user-note-tool-item no-button-style text-secondary">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserNoteHeader;
