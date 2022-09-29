import { useState } from 'react';
import { ArrowDown } from '../../assets/icons';
import AddToCollectionDropdown from './AddToCollectionDropdown';

function SearchResultItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ width: '200px' }}>
      <img
        src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780544947221_p0_v6_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D"
        width="80px"
        height="122px"
        alt="Book Result Item"
        style={{ margin: '0 0 7px 59px' }}
      />
      <h1
        className="text-primary text-center"
        style={{ fontSize: '16px', marginBottom: '3px' }}
      >
        Peak
      </h1>
      <h2 className="text-primary text-center" style={{ fontSize: '14px' }}>
        Anders Ericsson
      </h2>

      <div className="text-center">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span style={{ fontSize: '12px' }}>(4.03)</span>
      </div>

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
          style={{ borderRadius: '0 10px 10px 0' }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ArrowDown />
        </button>
      </div>

      <AddToCollectionDropdown open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default SearchResultItem;
