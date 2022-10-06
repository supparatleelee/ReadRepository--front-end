import UserNoteContent from './UserNoteContent';
import UserNoteHeader from './UserNoteHeader';

function UserNote({ onEditing, isEditing, onClose }) {
  return (
    <div className="border border-grey border-radius-10px w-100 bg-white">
      <UserNoteHeader onEditing={onEditing} />
      <UserNoteContent isEditing={isEditing} onClose={onClose} />
    </div>
  );
}

export default UserNote;
