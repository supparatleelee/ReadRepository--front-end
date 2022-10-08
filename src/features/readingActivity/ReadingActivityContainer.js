function ReadingActivityContainer() {
  return (
    <div
      style={{ animation: 'fadeOpen 1s' }}
      className="bg-white border border-radius-10px p-4"
    >
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
              width: '45%',
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
      <button
        type="button"
        className="btn btn-primary mt-2 w-20 border-radius-10px"
        style={{
          marginLeft: '90%',
          fontSize: '14px',
          padding: '5px 15px',
        }}
      >
        Update
      </button>
    </div>
  );
}

export default ReadingActivityContainer;
