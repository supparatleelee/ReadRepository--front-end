import { useRef, useState } from 'react';
import { useBookContext } from '../../contexts/BookContext';

function NoteForm({ isEditing, onClose }) {
  const { createUserNote, bookCoverOLID, updateUserNote, userNote } =
    useBookContext();

  const userNoteInputEl = useRef();
  const [userNoteContentForButton, setUserNoteContentForButton] = useState('');

  const handleKeyUpEnter = async (e) => {
    if (e.key === 'Enter') {
      await createUserNote(bookCoverOLID, e.target.value);
      userNoteInputEl.current.value = '';
    }
  };

  const handleOnSubmit = async (e) => {
    await createUserNote(bookCoverOLID, userNoteContentForButton);
    userNoteInputEl.current.value = '';
  };

  const handleKeyUpEnterEditing = async (e) => {
    if (e.key === 'Enter') {
      await updateUserNote(bookCoverOLID, userNoteContentForButton);
      onClose();
      userNoteInputEl.current.value = '';
    }
  };

  const handleOnEdit = async (e) => {
    await updateUserNote(bookCoverOLID, userNoteContentForButton);
    onClose();
    userNoteInputEl.current.value = '';
  };

  return (
    <div className="input-group mb-3">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control"
            placeholder={userNote}
            aria-label="user-note"
            aria-describedby="button-addon2"
            ref={userNoteInputEl}
            onKeyUp={handleKeyUpEnterEditing}
            onChange={(e) => setUserNoteContentForButton(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleOnEdit}
          >
            Update Note
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="form-control"
            placeholder="Add your note here..."
            aria-label="user-note"
            aria-describedby="button-addon2"
            ref={userNoteInputEl}
            onKeyUp={handleKeyUpEnter}
            onChange={(e) => setUserNoteContentForButton(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleOnSubmit}
          >
            Add Note
          </button>
        </>
      )}
    </div>
  );
}

export default NoteForm;
