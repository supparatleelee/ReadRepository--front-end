import { useBookContext } from '../../contexts/BookContext';

function BookInfoDetails({
  title,
  // authorName,
  description,
  publishDate,
  subject,
}) {
  const { bookAuthorName } = useBookContext();
  return (
    <div
      className="w-100 d-flex justify-content-around px-5"
      style={{
        paddingLeft: '10px',
        paddingRight: '10px',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 700 }}>
          {title || 'Undefined'}
        </h1>
        <h2 style={{ fontSize: '24px', fontWeight: 500 }} className="pt-2">
          {bookAuthorName || 'Undefined'}
        </h2>

        <div className="pt-2">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span style={{ fontSize: '18px' }}>(4.03)</span>
        </div>

        <p className="pt-4" style={{ fontSize: '16px' }}>
          {description || "This book still doesn't have any description yet"}
        </p>
      </div>

      <div className="d-flex">
        <div className="text-primary font-weight-bold">
          <h3 style={{ fontSize: '22px' }}>Publish Date</h3>
          <p style={{ fontSize: '20px' }}>{publishDate || 'Undefined'}</p>
        </div>
        <div className="vertical-line"></div>
        <div
          className="text-primary font-weight-bold"
          style={{ marginLeft: '10px' }}
        >
          <h3 style={{ fontSize: '22px' }}>Genre</h3>
          <p style={{ fontSize: '20px' }}>{subject || 'Undefined'}</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfoDetails;
