function UserCollectionContainer() {
  return (
    <div className="mt-5 d-flex">
      <div className="want-to-read">
        <h2 style={{ fontSize: '18px' }}>Want to Read</h2>
        <div
          className="bg-grey border-radius-10px mt-4"
          style={{ width: '150px', height: '190px' }}
        ></div>
      </div>
      <div className="vertical-line" style={{ margin: '0 100px' }}></div>
      <div className="curently reading">
        <h2 style={{ fontSize: '18px' }}>Currently Reading</h2>
        <div
          className="bg-grey border-radius-10px mt-4"
          style={{ width: '150px', height: '190px' }}
        ></div>
      </div>
      <div className="vertical-line" style={{ margin: '0 100px' }}></div>
      <div className="read">
        <h2 style={{ fontSize: '18px' }}>Read</h2>
        <div
          className="bg-grey border-radius-10px mt-4"
          style={{ width: '150px', height: '190px' }}
        ></div>
      </div>
    </div>
  );
}

export default UserCollectionContainer;
