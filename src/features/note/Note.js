import { useBookContext } from '../../contexts/BookContext';
import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteHeader from './NoteHeader';
import UserNote from './UserNote';

function Note() {
  const { userNote } = useBookContext();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <NoteHeader />
      {userNote ? (
        <UserNote
          onEditing={() => setIsEditing(true)}
          onClose={() => setIsEditing(false)}
          isEditing={isEditing}
        />
      ) : (
        <NoteForm />
      )}
    </>
  );
}

export default Note;
