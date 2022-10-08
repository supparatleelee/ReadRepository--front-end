import { useState } from 'react';
import { ArrowDownPrimary } from '../../assets/icons';
import AddToCollectionDropdown from '../search/AddToCollectionDropdown';

function BookCollectionLists({ bookOlid, bookTitle, bookStatus }) {
  const [isOpen, setIsOpen] = useState(false);

  const formatBookStatus = () => {
    if (bookStatus === 'WANT_TO_READ') {
      return 'Want to Read';
    }
    if (bookStatus === 'CURRENTLY_READING') {
      return 'CurrentlyReading';
    }
    if (bookStatus === 'READ') {
      return 'Read';
    }
  };

  return (
    <>
      <div className="d-flex align-items-center p-3">
        <img
          src={
            bookOlid
              ? `https://covers.openlibrary.org/b/olid/${bookOlid}-M.jpg`
              : 'https://unmpress.com/sites/default/files/default_images/no_image_book.jpg'
          }
          width="150px"
          height="210px"
          alt="Book Result Item"
          className="d-block m-auto"
          style={{ boxShadow: '6px 7px 15px rgba(0, 0, 0, 0.20)' }}
        />

        <div
          className="collection-item-details w-100 d-flex justify-content-between"
          style={{ marginLeft: '40px' }}
        >
          <div className="left-div d-flex flex-column justify-content-between gap-1">
            <h1 style={{ fontSize: '22px' }}>{bookTitle}</h1>
            {/* <h2 style={{ fontSize: '20px' }}>Author's name</h2> */}
            <div className="user-rating d-flex align-items-center">
              <span style={{ fontSize: '18px' }}>Your Rating: </span>
              <div className="text-center">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>

            <div style={{ marginTop: '10%' }}>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                style={{ borderRadius: '10px 0 0 10px', borderRight: 'none' }}
              >
                {formatBookStatus() || 'Want To Read'}
              </button>

              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                style={{
                  borderRadius: '0 10px 10px 0',
                  borderLeft: '1px solid #A8A278',
                }}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <ArrowDownPrimary />
              </button>
            </div>

            {/* <AddToCollectionDropdown
              open={isOpen}
              onClose={() => setIsOpen(false)}
            /> */}
          </div>
          <div className="right-div">
            <button className="no-button-style text-secondary">
              Delete from list
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </>
  );
}

export default BookCollectionLists;
