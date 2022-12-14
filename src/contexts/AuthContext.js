import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../api/authApi';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utility/localStorage';
import { toast } from 'react-toastify';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    setTimeout(() => getMe(), 1);
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  const deleteAccount = async () => {
    try {
      await authService.deleteAccount();
      setUser(null);
      removeAccessToken();
      toast.success('Success delete your account');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.msg);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading, deleteAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
