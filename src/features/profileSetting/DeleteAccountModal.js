import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';
import { useAuth } from '../../contexts/AuthContext';

function DeleteAccountModal({ open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);
  const { deleteAccount } = useAuth();

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

  const handleOnDelete = async (e) => {
    onClose();
    await deleteAccount();
  };

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <h1 style={{ fontSize: '22px' }}>Are You Sure?</h1>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-outline-danger w-25 d-block w-100"
                onClick={handleOnDelete}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-primary w-25 d-block w-100 mt-2"
                onClick={onClose}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
