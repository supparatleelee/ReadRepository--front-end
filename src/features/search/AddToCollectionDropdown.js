import { CURRENTLY_READING, READ, WANT_TO_READ } from '../../config/env';
import { useBookContext } from '../../contexts/BookContext';

function AddToCollectionDropdown({ open, onClose, onCheck }) {
  const { thisBookStatus, setThisBookStatus } = useBookContext();

  const sendBookStatus = async (e) => {
    setThisBookStatus(e.target.value);
    await onCheck();
  };

  return (
    <form
      className={`dropdown-menu px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
      style={{ animation: 'fadeOpen 0.5s' }}
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={WANT_TO_READ}
          id="flexCheckDefault1"
          name="flexCheckDefault"
          onChange={onCheck}
          checked={thisBookStatus === WANT_TO_READ ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault1">
          Want to Read
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={CURRENTLY_READING}
          id="flexCheckChecked2"
          name="flexCheckDefault"
          onChange={onCheck}
          checked={thisBookStatus === CURRENTLY_READING ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked2">
          Currently Reading
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={READ}
          name="flexCheckDefault"
          id="flexCheckChecked3"
          onChange={onCheck}
          checked={thisBookStatus === READ ? true : false}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked3">
          Read
        </label>
      </div>
    </form>
  );
}

export default AddToCollectionDropdown;
