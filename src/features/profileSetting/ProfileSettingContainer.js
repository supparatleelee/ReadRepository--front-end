import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../../components/ui/Avatar';
import DeleteAccountModal from './DeleteAccountModal';
import { useState } from 'react';

function ProfileSettingContainer() {
  const {
    user: { firstName, lastName, email },
  } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="d-flex mt-4" style={{ animation: 'fadeOpen 1s' }}>
      <div className="profile-image w-30 bg-white d-flex flex-column border-radius-10px box-shadow-5610 gap-4 p-5">
        <Avatar size="150px" />
        <button type="button" className="btn btn-outline-primary mt-1">
          Change Your Profile Image
        </button>
      </div>

      <div
        className="profile-info w-100 bg-white border-radius-10px box-shadow-5610 p-5"
        style={{ marginLeft: '20px', height: '20%' }}
      >
        <div className="d-flex align-items-center gap-3">
          <h1 style={{ fontSize: '26px', fontWeight: 700 }}>
            {firstName} {lastName}
          </h1>
          <button type="button" className="btn btn-outline-primary">
            Edit Your Name
          </button>
        </div>

        <div className="d-flex align-items-center gap-3 mt-4">
          <h1 style={{ fontSize: '20px', fontWeight: 500 }}>Email: {email}</h1>
          <button type="button" className="btn btn-outline-primary">
            Edit Your Email
          </button>
        </div>

        <button type="button" className="btn btn-outline-primary mt-3">
          Change Your Password
        </button>

        <button
          type="button"
          className="d-block btn btn-danger mt-5"
          onClick={() => setIsOpenModal(true)}
        >
          Delete Your Account
        </button>

        <DeleteAccountModal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      </div>
    </div>
  );
}

export default ProfileSettingContainer;
