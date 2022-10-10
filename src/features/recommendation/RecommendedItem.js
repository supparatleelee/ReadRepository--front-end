import { Link } from 'react-router-dom';

function RecommendedItem() {
  let coverOLID = 'OL28283976M';
  let authorName = 'Ben Horowitz';
  let title = 'The Hard Thing about Hard Things';
  return (
    <div
      style={{ width: '200px' }}
      className="d-flex flex-column justify-content-between mx-1"
    >
      <Link to={`/book/info/${coverOLID}`} className="text-decoration-none">
        <img
          src={
            coverOLID
              ? `https://covers.openlibrary.org/b/olid/${coverOLID}-M.jpg`
              : 'https://unmpress.com/sites/default/files/default_images/no_image_book.jpg'
          }
          width="80px"
          height="122px"
          alt="Book Result Item"
          style={{
            margin: '0 0 7px 42px',
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
      </Link>
    </div>
  );
}

export default RecommendedItem;
