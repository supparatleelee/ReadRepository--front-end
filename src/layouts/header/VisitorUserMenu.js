import { useState } from 'react';
import LoginModal from '../../features/loginRegister/LoginModal';
import RegisterModal from '../../features/loginRegister/RegisterModal';

function VisitorUserMenu() {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  return (
    <div>
      {/* Change to to the real path once when doing authFeature */}
      <button
        className="text-decoration-none px-5 text-dark"
        onClick={() => setIsOpenModal1(true)}
        style={{ border: 'none', backgroundColor: '#fff' }}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm text-decoration-none px-5 py-3 text-dark border-radius-10px"
        onClick={() => setIsOpenModal2(true)}
      >
        Create Account
      </button>
      <LoginModal open={isOpenModal1} onClose={() => setIsOpenModal1(false)} />
      <RegisterModal
        open={isOpenModal2}
        onClose={() => setIsOpenModal2(false)}
      />
    </div>
  );
}

export default VisitorUserMenu;
