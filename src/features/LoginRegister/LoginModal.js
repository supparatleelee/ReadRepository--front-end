import { useState, useEffect, useRef } from 'react';
import { Modal as BsModal } from 'bootstrap';
import RegisterModal from './RegisterModal';

function LoginModal({ open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    console.log('first');
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      return modal?.show();
    }
    modal?.hide();
  }, [open, modal]);

  return (
    <div className="modal fade" ref={modalEl} onClick={onClose}>
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
            <form>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
              />
              <button
                className="btn btn-secondary d-grid gap-2 col-6 m-auto w-100"
                type="button"
              >
                Log in
              </button>
            </form>
          </div>

          <div className="modal-footer m-auto">
            <p>
              No account? <u>Create One</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
