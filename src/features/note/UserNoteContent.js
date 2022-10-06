import { useBookContext } from '../../contexts/BookContext';
import NoteForm from './NoteForm';

function UserNoteContent({ isEditing, onClose }) {
  const { userNote } = useBookContext();

  return (
    <div className="p-4">
      {isEditing ? (
        <NoteForm isEditing={isEditing} onClose={onClose} />
      ) : (
        <p className=" lh-lg">{userNote}</p>
      )}
    </div>
  );
}

export default UserNoteContent;
