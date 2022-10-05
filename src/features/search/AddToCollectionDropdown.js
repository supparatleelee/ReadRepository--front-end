import { useEffect } from 'react';
import { CURRENTLY_READING, READ, WANT_TO_READ } from '../../config/env';
import { useBookContext } from '../../contexts/BookContext';

function AddToCollectionDropdown({ open, onClose, onCheck }) {
  const { thisBookStatus } = useBookContext();

  return (
    <div
      className={`dropdown-menu px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
      style={{ animation: 'fadeOpen 0.5s' }}
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={WANT_TO_READ}
          id="flexCheckDefault"
          onChange={onCheck}
          defaultChecked={thisBookStatus === WANT_TO_READ ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Want to Read
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={CURRENTLY_READING}
          id="flexCheckChecked"
          onChange={onCheck}
          defaultChecked={thisBookStatus === CURRENTLY_READING ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Currently Reading
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={READ}
          id="flexCheckChecked"
          onChange={onCheck}
          defaultChecked={thisBookStatus === READ ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Read
        </label>
      </div>
    </div>
  );
}

export default AddToCollectionDropdown;
