function VisitorSearchResultItem({ title, authorName, coverOLID, OLIDkey }) {
  return (
    <div
      style={{ width: '200px', marginTop: '40px', animation: 'fadeIn 1s' }}
      className="d-flex flex-column justify-content-between mx-1"
    >
      <a
        className="d-flex flex-column justify-content-between mx-1 text-decoration-none"
        href={`https://openlibrary.org${OLIDkey}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            coverOLID
              ? `https://covers.openlibrary.org/b/olid/${coverOLID}-M.jpg`
              : 'https://theprairiesbookreview.com/wp-content/uploads/2023/01/no-cover.png'
          }
          width="80px"
          height="122px"
          alt="Book Result Item"
          style={{
            margin: '0 0 7px 59px',
            boxShadow: '5px 6px 10px rgba(0, 0, 0, 0.20)',
          }}
        />
        <h1
          className="text-primary text-center"
          style={{ fontSize: '16px', marginBottom: '3px' }}
        >
          {title || 'Undefined Book Title'}
        </h1>
        <h2 className="text-primary text-center" style={{ fontSize: '14px' }}>
          {authorName || 'Undefined Author Name'}
        </h2>
      </a>
    </div>
  );
}

export default VisitorSearchResultItem;
