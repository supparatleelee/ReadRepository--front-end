import { useState } from 'react';

function AddToCollectionDropdown({ open, onClose }) {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.checked);
  };

  return (
    <div
      className={`dropdown-menu px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="want-to-read"
          id="flexCheckDefault"
          onChange={handleChecked}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Want to Read
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="currently-reading"
          id="flexCheckChecked"
          onChange={handleChecked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Currently Reading
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="read"
          id="flexCheckChecked"
          onChange={handleChecked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Read
        </label>
      </div>
    </div>
  );
}

export default AddToCollectionDropdown;
