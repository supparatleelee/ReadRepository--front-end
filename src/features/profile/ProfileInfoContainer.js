import { SettingSecondaryColor } from '../../assets/icons';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function ProfileInfoContainer() {
  const {
    user: { role, firstName, lastName },
  } = useAuth();

  const formatRole = () => {
    if (role === 'READER') {
      return 'Reader';
    }
    if (role === 'AUTHOR') {
      return 'Author';
    }
    if (role === 'ADMIN') {
      return 'Admin';
    }
  };

  return (
    <div
      className="d-flex mt-4 bg-white border-radius-10px p-5 box-shadow-5610"
      style={{ animation: 'fadeIn 1s' }}
    >
      <div className="profile-image w-30">
        <Avatar size="150px" />
      </div>

      <div className="profile-info w-100" style={{ marginLeft: '70px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: 700 }}>
              {firstName} {lastName}
            </h1>
            <div className="btn btn-primary">{formatRole() || 'Reader'}</div>
          </div>
          <button className="profile-setting d-flex align-items-center no-button-style bg-white">
            <SettingSecondaryColor />
            <span className="text-secondary">Edit Profile</span>
          </button>
        </div>

        <div
          className="mt-4 w-100 d-flex gap-3"
          style={{ animation: 'fadeOpen 1s' }}
        >
          <button type="button" class="btn fw-semibold">
            Book Collection <span class="badge text-bg-secondary">100</span>
          </button>
          <button type="button" class="btn fw-semibold">
            Friends <span class="badge text-bg-secondary">20</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoContainer;
