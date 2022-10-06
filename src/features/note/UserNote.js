import UserNoteContent from './UserNoteContent';
import UserNoteHeader from './UserNoteHeader';

function UserNote() {
  return (
    <div className="border border-grey border-radius-10px w-100 bg-white">
      <UserNoteHeader />
      <UserNoteContent />
    </div>
  );
}

export default UserNote;
