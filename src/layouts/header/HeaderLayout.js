import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from '../container/Container';
import bg from '../../assets/images/bg.png';
import { useAuth } from '../../contexts/AuthContext';
import VisitorContainer from '../container/VisitorContainer';

function HeaderLayout() {
  const { user } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      {user ? (
        <Container>
          <Outlet />
        </Container>
      ) : (
        <VisitorContainer>
          <Outlet />
        </VisitorContainer>
      )}
    </div>
  );
}

export default HeaderLayout;
