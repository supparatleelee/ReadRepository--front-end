import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';
import { useBookContext } from '../../contexts/BookContext';
import { timeSince } from '../../utility/dataFormat';

function UserNoteHeader({ onEditing }) {
  const {
    user: { firstName, lastName },
  } = useAuth();
  const { deleteUserNote, bookCoverOLID, userNoteRes } = useBookContext();

  const handleOnDelete = async (e) => {
    await deleteUserNote(bookCoverOLID);
  };

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
        <small className="text-muted text-3">{timeSince(userNoteRes)}</small>
      </div>
      <div className="user-note-tools d-flex">
        <button
          className="user-note-tool-item no-button-style text-secondary"
          onClick={onEditing}
        >
          Edit
        </button>
        <button
          className="user-note-tool-item no-button-style text-secondary"
          onClick={handleOnDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserNoteHeader;
