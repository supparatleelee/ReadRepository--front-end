import { useState, useEffect, useRef } from 'react';
import { Modal as BsModal } from 'bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
// import RegisterModal from './RegisterModal';

function LoginModal({ open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

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

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('succes login');
    } catch (err) {
      toast.error(err.response.data.msg);
    } finally {
      stopLoading();
    }
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
            <form onSubmit={handleSubmitForm}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                value={input.email}
                onChange={handleChangeInput}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                value={input.password}
                onChange={handleChangeInput}
              />
              <button
                className="btn btn-secondary d-grid gap-2 col-6 m-auto w-100"
                type="submit"
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
