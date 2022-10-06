function ReviewForm() {
  return (
    <div className="input-group mb-3 mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="What you think about this book?"
        aria-label="user-review"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="button" id="button-addon2">
        Add Review
      </button>
    </div>
  );
}

export default ReviewForm;
