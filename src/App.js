import Router from './route/Router';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/ui/Spinner';
import { useLoading } from './contexts/LoadingContext';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loading } = useLoading();
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="5000"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default App;
