import { createContext, useContext, useState } from 'react';
import * as profileService from '../api/profileApi';
// import * as bookService from '../api/bookApi';
import { useLoading } from './LoadingContext';
import { toast } from 'react-toastify';

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const [allUserCollectionTotal, setAllUserCollectionTotal] = useState('');
  const [allUserCollectionLists, setAllUserCollectionLists] = useState([]);
  const { startLoading, stopLoading } = useLoading();

  const getAllUserCollection = async (userId) => {
    try {
      startLoading();
      const res = await profileService.getAllUserCollection(userId);
      setAllUserCollectionTotal(res.data.getAllUserCollection[0].total);
      // console.log(res.data.getAllUserCollection[0]);
      // console.log(res.data.getAllUserCollection[1].collectionLists);
      // console.log(
      //   res.data.getAllUserCollection[1].collectionLists[0].bookStatus
      // );
      setAllUserCollectionLists(
        res.data.getAllUserCollection[1].collectionLists
      );
      toast.success('Success extract data from Open Library API');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    } finally {
      stopLoading();
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        getAllUserCollection,
        allUserCollectionTotal,
        allUserCollectionLists,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

const useProfileContext = () => useContext(ProfileContext);
export { useProfileContext };

export default ProfileContextProvider;
