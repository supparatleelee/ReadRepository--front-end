import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';
import { useProfileContext } from '../../contexts/ProfileContext';
import BookCollectionLists from './BookCollectionLists';

function BookCollectionModal({ open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);
  const { allUserCollectionLists } = useProfileContext();

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      return modal?.show();
    }
    modal?.hide();
  }, [open, modal]);

  return (
    <div
      className="modal fade modal-bg"
      tabIndex="-1"
      ref={modalEl}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 style={{ fontSize: '18px' }}>Book Collection</h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            {allUserCollectionLists.map((item, index) => (
              <BookCollectionLists
                key={index}
                index={index}
                bookOlid={allUserCollectionLists[index].Book.bookOlid}
                bookTitle={allUserCollectionLists[index].Book.bookData.title}
                bookStatus={allUserCollectionLists[index].bookStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCollectionModal;
