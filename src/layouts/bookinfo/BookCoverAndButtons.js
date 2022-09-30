import { useState } from 'react';
import { ArrowDown } from '../../assets/icons';
import AddToCollectionDropdown from '../../features/search/AddToCollectionDropdown';

function BookCoverAndButtons() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-30">
      <img
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780544947221_p0_v6_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D"
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
            className="btn btn-primary w-75"
            style={{
              borderRadius: '10px 0 0 10px',
            }}
          >
            Want to Read
          </button>

          <button
            type="button"
            className="btn btn-primary w-20"
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

        <button
          type="button"
          className="btn btn-secondary mt-2 w-100 border-radius-10px"
        >
          Buy This Book
        </button>
      </div>
    </div>
  );
}

export default BookCoverAndButtons;
