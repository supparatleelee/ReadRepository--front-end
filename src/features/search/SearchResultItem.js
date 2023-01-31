import { useState } from 'react';
import { ArrowDown } from '../../assets/icons';
import AddToCollectionDropdown from './AddToCollectionDropdown';
import { Link } from 'react-router-dom';
import { useBookContext } from '../../contexts/BookContext';

function SearchResultItem({ title, authorName, coverOLID }) {
  const [isOpen, setIsOpen] = useState(false);
  const { getBookInfo } = useBookContext();

  const handleSendOLID = async (e) => {
    await getBookInfo(coverOLID, authorName);
  };

  return (
    <div
      style={{ width: '200px', marginTop: '40px', animation: 'fadeIn 1s' }}
      className="d-flex flex-column justify-content-between mx-1"
    >
      <Link
        to={`/book/info/${coverOLID}`}
        className="text-decoration-none"
        onClick={handleSendOLID}
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
      </Link>

      {/* <div className="text-center">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span style={{ fontSize: '12px' }}>(4.03)</span>
      </div> */}

      <div style={{ marginTop: '10px' }} className="text-center">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ borderRadius: '10px 0 0 10px' }}
        >
          Want to Read
        </button>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{
            borderRadius: '0 10px 10px 0',
            borderLeft: '1px solid #A8A278',
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ArrowDown />
        </button>
        <AddToCollectionDropdown
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

export default SearchResultItem;
