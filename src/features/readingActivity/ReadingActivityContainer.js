import { useState } from 'react';

function ReadingActivityContainer() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [progressBarMockUp, setProgressBarMockUp] = useState(50);

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
              background:
                'linear-gradient(90deg, rgba(168,162,120,1) 0%, rgba(102,89,48,1) 100%)',
            }}
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span style={{ fontSize: '12px' }}>45%</span>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {isUpdating ? (
          <small className="text-muted text-3 w-50">
            On page
            <input
              type="text"
              className="border-radius-10px"
              style={{ width: '10%', marginLeft: '2%', marginRight: '3%' }}
            />
            Of
            <input
              type="text"
              className="border-radius-10px"
              style={{ width: '10%', marginLeft: '3%' }}
            />
          </small>
        ) : (
          <small className="text-muted text-3 w-50">
            Last updated 7 October 2022
          </small>
        )}

        <button
          type="button"
          className="btn btn-primary mt-2 border-radius-10px"
          style={{
            fontSize: '14px',
          }}
          onClick={() => {
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
