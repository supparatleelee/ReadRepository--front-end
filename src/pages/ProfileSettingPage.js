import ProfileSettingContainer from '../features/profileSetting/ProfileSettingContainer';
import ProfileSettingHeader from '../features/profileSetting/ProfileSettingHeader';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProfileSettingPage() {
  const {
    user: { id },
  } = useAuth();
  const navigate = useNavigate();

  const handleOnNavigate = (e) => {
    navigate(`/profile/${id}`);
  };
  return (
    <div className="margin-left-8vw w-100">
      <ProfileSettingHeader />

      <ProfileSettingContainer />

      <div
        className="d-flex mt-4 bg-white border-radius-10px box-shadow-5610 p-4"
        style={{ animation: 'fadeOpen 1s' }}
      >
        <button
          type="button"
          className="btn btn-primary w-100 box-shadow-5610"
          onClick={handleOnNavigate}
        >
          Back To Your Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileSettingPage;
