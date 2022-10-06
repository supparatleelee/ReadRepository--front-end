function NoteForm() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add your note here..."
        aria-label="user-note"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="button" id="button-addon2">
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;
