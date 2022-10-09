import { useState } from 'react';
import { useBookContext } from '../../contexts/BookContext';

function ReadingActivityContainer() {
  const [isUpdating, setIsUpdating] = useState(false);

  const {
    updateReadingActivity,
    bookCoverOLID,
    readingProgress,
    setReadingProgress,
  } = useBookContext();

  const [input, setInput] = useState({
    currentPage: '',
    totalPage: '',
  });

  const handleChangedInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await updateReadingActivity(bookCoverOLID, input);
    // for fixed up, but should not do like this.
    const updateReadingProgress = (input.currentPage / input.totalPage) * 100;
    setReadingProgress(updateReadingProgress);
    setIsUpdating(false);
  };

  return (
    <div
      style={{ animation: 'fadeOpen 1s' }}
      className="bg-white border border-radius-10px p-4 box-shadow-5610"
    >
      <small className="text-muted text-3 w-50">{`On page 251 of 500`}</small>

      <div className="progress-bar-section d-flex align-items-center justify-content-between">
        <div
          className="progress border-radius-10px"
          style={{
            height: '8px',
            width: '95%',
          }}
        >
          <div
            className="progress-bar border-radius-10px"
            role="progressbar"
            style={{
              width: `${readingProgress}%`,
              background:
                'linear-gradient(90deg, rgba(168,162,120,1) 0%, rgba(102,89,48,1) 100%)',
            }}
            aria-valuenow={readingProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span style={{ fontSize: '12px' }}>{`${Math.round(
          readingProgress
        )}%`}</span>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {isUpdating ? (
          <form className="text-muted text-3 w-50" id="readingActivity">
            On page
            <input
              type="number"
              className="border-radius-10px"
              name="currentPage"
              defaultValue={input.currentPage}
              onChange={handleChangedInput}
              style={{
                width: '20%',
                marginLeft: '2%',
                marginRight: '3%',
                textAlign: 'center',
              }}
            />
            Of
            <input
              type="number"
              className="border-radius-10px"
              name="totalPage"
              defaultValue={input.totalPage}
              onChange={handleChangedInput}
              style={{ width: '20%', marginLeft: '3%', textAlign: 'center' }}
            />
            <button
              type="submit"
              className="btn btn-primary border-radius-10px"
              style={{
                fontSize: '14px',
                marginLeft: '5%',
              }}
              form="readingActivity"
              onClick={handleSubmitForm}
            >
              Update
            </button>
          </form>
        ) : (
          <small className="text-muted text-3 w-50">
            Last updated 7 October 2022
          </small>
        )}

        <button
          type="submit"
          className={`btn mt-2 border-radius-10px ${
            isUpdating ? 'btn-outline-primary' : 'btn-primary'
          }`}
          style={{
            fontSize: '14px',
          }}
          onClick={() => {
            setIsUpdating(true);
          }}
        >
          Edit your activity
        </button>
      </div>
    </div>
  );
}

export default ReadingActivityContainer;
