import ProfileHeader from '../features/profile/ProfileHeader';
import ProfileInfoContainer from '../features/profile/ProfileInfoContainer';
import UserCollectionDisplayContainer from '../features/profile/UserCollectionDisplayContainer';

function ProfilePage() {
  return (
    <div className="margin-left-8vw w-100">
      <ProfileHeader />

      <ProfileInfoContainer />

      <UserCollectionDisplayContainer />
    </div>
  );
}

export default ProfilePage;
