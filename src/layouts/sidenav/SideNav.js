import { NavLink } from 'react-router-dom';
import {
  Explore,
  Home,
  MyBook,
  ReadingChallenge,
  SettingPrimaryColor,
} from '../../assets/icons';

function SideNav() {
  return (
    <div style={{ width: '25%' }}>
      <ul className="nav flex-column">
        <li className="nav-item mb-5">
          <NavLink className="nav-link active" aria-current="page" end to="/">
            <Home />
            <span style={{ marginLeft: '20px' }}>Home</span>
          </NavLink>
        </li>
        <li className="nav-item mb-5">
          <NavLink className="nav-link" to="#">
            <MyBook />
            <span style={{ marginLeft: '20px' }}>My Books</span>
          </NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink className="nav-link" to="#">
            <Explore />
            <span style={{ marginLeft: '20px' }}>Explore</span>
          </NavLink>
        </li>

        <hr className="text-primary" />

        <li className="nav-item mt-2 mb-3">
          <NavLink className="nav-link" to="#">
            <ReadingChallenge />
            <span style={{ marginLeft: '20px' }}>Reading Challenges</span>
          </NavLink>
        </li>

        <hr className="text-primary" />

        <li className="nav-item mt-2">
          <NavLink className="nav-link" to="#">
            <SettingPrimaryColor />
            <span style={{ marginLeft: '20px' }}>Setting</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
