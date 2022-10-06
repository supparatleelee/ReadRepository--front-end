import { createContext, useContext, useState } from 'react';
import * as profileService from '../api/profileApi';

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {
  const [allUserCollection, setAllUserCollection] = useState('');

  const getAllUserCollection = async (userId) => {
    try {
      const res = await profileService.getAllUserCollection(userId);
      setAllUserCollection(res.data.getAllUserCollection[0].total);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProfileContext.Provider
      value={{ getAllUserCollection, allUserCollection }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

const useProfileContext = () => useContext(ProfileContext);
export { useProfileContext };

export default ProfileContextProvider;
