import UserCollectionContainer from '../features/userCollection/UserCollectionContainer';
import UserCollectionHeader from '../features/userCollection/UserCollectionHeader';

function UserCollectionPage() {
  return (
    <div className="margin-left-8vw w-100">
      <UserCollectionHeader />
      <UserCollectionContainer />
    </div>
  );
}

export default UserCollectionPage;
