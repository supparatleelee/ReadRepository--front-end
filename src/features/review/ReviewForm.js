function ReviewForm() {
  return (
    <div class="input-group mb-3 mt-4">
      <input
        type="text"
        class="form-control"
        placeholder="What you think about this book?"
        aria-label="user-review"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-primary" type="button" id="button-addon2">
        Add Review
      </button>
    </div>
  );
}

export default ReviewForm;
