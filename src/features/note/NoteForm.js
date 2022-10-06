function NoteForm() {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Add your note here..."
        aria-label="user-note"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-primary" type="button" id="button-addon2">
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;
