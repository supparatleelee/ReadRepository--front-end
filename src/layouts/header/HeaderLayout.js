import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from '../container/Container';
import bg from '../../assets/images/bg.png';

function HeaderLayout() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default HeaderLayout;
