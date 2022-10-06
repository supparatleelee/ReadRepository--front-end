function UserCollectionDisplayContainer() {
  return (
    <div
      className="user-collection-container mt-5 d-flex justify-content-between"
      style={{ animation: 'fadeIn 1s' }}
    >
      <button
        className="btn want-to-read-Container bg-white p-4 border-radius-10px box-shadow-5610"
        style={{ width: '30%' }}
      >
        <h2 style={{ fontSize: '18px' }}>
          Want To Read <span className="badge bg-secondary">12</span>
        </h2>
      </button>

      <button
        className="btn currently-reading-Container bg-white p-4 border-radius-10px box-shadow-5610"
        style={{ width: '30%' }}
      >
        <h2 style={{ fontSize: '18px' }}>
          Currently Reading <span className="badge bg-secondary">2</span>
        </h2>
      </button>

      <button
        className="btn read-Container bg-white p-4 border-radius-10px box-shadow-5610"
        style={{ width: '30%' }}
      >
        <h2 style={{ fontSize: '18px' }}>
          Read <span className="badge bg-secondary">86</span>
        </h2>
      </button>
    </div>
  );
}

export default UserCollectionDisplayContainer;
