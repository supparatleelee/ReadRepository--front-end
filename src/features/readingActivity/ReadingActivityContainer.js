import { useState } from 'react';
// import { useBookContext } from '../../contexts/BookContext';

function ReadingActivityContainer() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [progressBarMockUp, setProgressBarMockUp] = useState(50);

  // const { updateReadingActivity, bookCoverOLID, readingProgress } =
  //   useBookContext();

  // const [input, setInput] = useState({
  //   currentPage: '',
  //   totalPage: '',
  // });

  // const handleChangedInput = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value }); // [] <- get value from the valiable of the object
  // };

  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();
  //   await updateReadingActivity(bookCoverOLID, input);
  //   setIsUpdating(false);
  // };

  return (
    <div
      style={{ animation: 'fadeOpen 1s' }}
      className="bg-white border border-radius-10px p-4 box-shadow-5610"
    >
      <small className="text-muted text-3 w-50">On page 251 of 500</small>

      <div className="progress-bar-section d-flex align-items-center justify-content-between">
        <div
          className="progress border-radius-10px"
          style={{
            height: '8px',
            width: '89%',
          }}
        >
          <div
            className="progress-bar border-radius-10px"
            role="progressbar"
            style={{
              width: `${progressBarMockUp}%`,
              // width: `${readingProgress}%`,
              background:
                'linear-gradient(90deg, rgba(168,162,120,1) 0%, rgba(102,89,48,1) 100%)',
            }}
            aria-valuenow={progressBarMockUp}
            // aria-valuenow={readingProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {/* <span style={{ fontSize: '12px' }}>{`${readingProgress}%`}</span> */}
        <span style={{ fontSize: '12px' }}>{`${progressBarMockUp}%`}</span>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {isUpdating ? (
          <form className="text-muted text-3 w-50" id="readingActivity">
            On page
            <input
              type="number"
              className="border-radius-10px"
              name="currentPage"
              // defaultValue={input.currentPage}
              // onChange={handleChangedInput}
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
              // defaultValue={input.totalPage}
              // onChange={handleChangedInput}
              style={{ width: '20%', marginLeft: '3%', textAlign: 'center' }}
            />
          </form>
        ) : (
          <small className="text-muted text-3 w-50">
            Last updated 7 October 2022
          </small>
        )}

        {/* {isUpdating && (
          <button
            type="submit"
            className="btn btn-primary mt-2 border-radius-10px"
            style={{
              fontSize: '14px',
            }}
            form="readingActivity"
            // onClick={() => {
            //   setIsUpdating((prev) => !prev);
            //   setProgressBarMockUp(80);
            // }}
            onClick={handleSubmitForm}
          >
            Update
          </button>
        )} */}

        <button
          type="submit"
          className="btn btn-primary mt-2 border-radius-10px"
          style={{
            fontSize: '14px',
          }}
          onClick={() => {
            // setIsUpdating(true);
            setIsUpdating((prev) => !prev);
            setProgressBarMockUp(80);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default ReadingActivityContainer;
