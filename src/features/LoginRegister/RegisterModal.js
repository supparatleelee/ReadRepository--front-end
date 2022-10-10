import { useState, useEffect, useRef } from 'react';
import { Modal as BsModal } from 'bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { validateRegister } from '../../validation/userValidate';
import { toast } from 'react-toastify';

function RegisterModal({ open, onClose }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
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

  const handleChangedInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); // [] <- get value from the valiable of the object
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }

    try {
      startLoading();
      await register(input);
      toast.success('success register');
      onClose();
    } catch (err) {
      toast.error(err.response.data.msg);
      setInput({ firstName: '', lastName: '', email: '', password: '' });
    } finally {
      stopLoading();
    }
  };

  return (
    <div
      className="modal fade"
      id="register-modal"
      tabIndex="-1"
      ref={modalEl}
      onClick={onClose}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmitForm}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                defaultValue={input.firstName}
                onChange={handleChangedInput}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                defaultValue={input.lastName}
                onChange={handleChangedInput}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                defaultValue={input.email}
                onChange={handleChangedInput}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="d-block w-100 mb-3 border-radius-10px p-2 border border-secondary"
                defaultValue={input.password}
                onChange={handleChangedInput}
              />
              <button
                className="btn btn-secondary d-grid gap-2 col-6 m-auto w-100"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="modal-footer m-auto">
            <p>
              Already have an account?{' '}
              <button
                data-bs-target="#login-modal"
                data-bs-toggle="modal"
                onClick={onClose}
                className="no-button-style"
              >
                <u>Login</u>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
