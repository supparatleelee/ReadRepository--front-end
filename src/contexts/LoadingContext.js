import { createContext, useContext, useState, useCallback } from 'react';

const LoadingContext = createContext();
function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = useCallback(() => setLoading(true), []);
  const stopLoading = useCallback(() => setLoading(false), []);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;

export const useLoading = () => {
  return useContext(LoadingContext);
};
