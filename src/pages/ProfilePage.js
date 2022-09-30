import ProfileHeader from '../features/profile/ProfileHeader';
import ProfileInfoContainer from '../features/profile/ProfileInfoContainer';
import UserCollectionContainer from '../features/profile/UserCollectionContainer';

function ProfilePage() {
  return (
    <div className="margin-left-8vw w-100">
      <ProfileHeader />

      <ProfileInfoContainer />

      <UserCollectionContainer />
    </div>
  );
}

export default ProfilePage;
