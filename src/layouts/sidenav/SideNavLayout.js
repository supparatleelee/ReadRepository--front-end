import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import SideNav from './SideNav';

function SideNavLayout() {
  return (
    <div className="d-flex marginx-7 w-100">
      <SideNav />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default SideNavLayout;
