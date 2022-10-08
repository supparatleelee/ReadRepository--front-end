import UserNoteContent from './UserNoteContent';
import UserNoteHeader from './UserNoteHeader';

function UserNote({ onEditing, isEditing, onClose }) {
  return (
    <div
      className="border border-grey border-radius-10px w-100 bg-white box-shadow-5610"
      style={{ animation: 'fadeIn 1s' }}
    >
      <UserNoteHeader onEditing={onEditing} onClose={onClose} />
      <UserNoteContent isEditing={isEditing} onClose={onClose} />
    </div>
  );
}

export default UserNote;
