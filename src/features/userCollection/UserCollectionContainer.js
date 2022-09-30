import UserCollectionItem from './UserCollectionItem';

function UserCollectionContainer() {
  return (
    <div className="mt-2">
      {/* .map here */}
      <UserCollectionItem />
      <UserCollectionItem />
      <UserCollectionItem />
      <UserCollectionItem />
      <UserCollectionItem />
    </div>
  );
}

export default UserCollectionContainer;
