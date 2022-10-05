import { useState } from 'react';
import { ArrowDown, ArrowDownPrimary } from '../../assets/icons';
import { useBookContext } from '../../contexts/BookContext';
import AddToCollectionDropdown from '../../features/search/AddToCollectionDropdown';

function BookCoverAndButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const { bookCoverOLID, addBookToList, thisBookStatus } = useBookContext();

  const handleCheckedBookStauts = async (e) => {
    if (e.target.checked === true) {
      await addBookToList(bookCoverOLID, e.target.value);
    }
  };

  const formatBookStatus = () => {
    if (thisBookStatus === 'WANT_TO_READ') {
      return 'Want to Read';
    }
    if (thisBookStatus === 'CURRENTLY_READING') {
      return 'CurrentlyReading';
    }
    if (thisBookStatus === 'READ') {
      return 'Read';
    }
  };

  return (
    <div className="w-30">
      <img
        src={
          bookCoverOLID
            ? `https://covers.openlibrary.org/b/olid/${bookCoverOLID}-M.jpg`
            : 'https://unmpress.com/sites/default/files/default_images/no_image_book.jpg'
        }
        width="190px"
        height="280px"
        alt="Book Result Item"
        className="d-block m-auto"
        style={{ boxShadow: '6px 7px 15px rgba(0, 0, 0, 0.20)' }}
      />

      <div>
        <div style={{ marginTop: '20px' }} className="text-center w-100">
          <button
            type="button"
            className={`btn btn-${
              thisBookStatus ? 'outline-primary' : 'primary'
            } w-75`}
            style={{
              borderRadius: '10px 0 0 10px',
              fontSize: '16px',
              borderRight: 'none',
            }}
          >
            {formatBookStatus() || 'Want to Read'}
          </button>

          <button
            type="button"
            className={`btn btn-${
              thisBookStatus ? 'outline-primary' : 'primary'
            } w-20`}
            style={{
              borderRadius: '0 10px 10px 0',
              borderLeft: '1px solid #A8A278',
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {thisBookStatus ? <ArrowDownPrimary /> : <ArrowDown />}
          </button>
        </div>

        <AddToCollectionDropdown
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onCheck={handleCheckedBookStauts}
        />

        {/* <button
          type="button"
          className="btn btn-secondary mt-2 w-100 border-radius-10px"
        >
          Buy This Book
        </button> */}
        <a
          className="text-decoration-none"
          href={`https://openlibrary.org/works/${bookCoverOLID}`}
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="btn btn-outline-primary mt-2 w-100 border-radius-10px"
          >
            Open in Open Library
          </button>
        </a>
      </div>
    </div>
  );
}

export default BookCoverAndButtons;
