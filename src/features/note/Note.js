import NoteForm from './NoteForm';
import NoteHeader from './NoteHeader';
import UserNote from './UserNote';

function Note() {
  let note = 0;
  return (
    <>
      <NoteHeader />
      {note ? <UserNote /> : <NoteForm />}
    </>
  );
}

export default Note;
