import { useState } from 'react';
import { ArrowDown } from '../../assets/icons';
import AddToCollectionDropdown from '../search/AddToCollectionDropdown';

function UserCollectionItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="d-flex align-items-center">
        <div
          className="bg-grey border-radius-10px mt-2"
          style={{ width: '150px', height: '190px' }}
        >
          {/* book cover here */}
        </div>

        <div
          className="collection-item-details w-100 d-flex justify-content-between"
          style={{ marginLeft: '40px' }}
        >
          <div className="left-div d-flex flex-column justify-content-between">
            <h1 style={{ fontSize: '22px' }}>Book Name</h1>
            <h2 style={{ fontSize: '20px' }}>Author's name</h2>
            <div className="user-rating d-flex align-items-center">
              <span style={{ fontSize: '18px' }}>Your Rating: </span>
              <div className="text-center">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>

            <div style={{ marginTop: '10px' }}>
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
            </div>

            <AddToCollectionDropdown
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
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

export default UserCollectionItem;
