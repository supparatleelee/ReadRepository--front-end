import { Link } from 'react-router-dom';
import { Logout, SettingPrimaryColor } from '../../assets/icons';
import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownMenu({ open, onClose }) {
  const { logout, user } = useAuth();

  return (
    <ul
      className={`dropdown-menu px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
      style={{ animation: 'fadeDown 1s' }}
    >
      <li>
        <Link
          // Change to /profile/${id} later
          to="/profile/1"
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={onClose}
        >
          <Avatar />
          <div className="d-flex flex-column">
            <span className="text-black fw-bold">
              {user.firstName + ' ' + user.lastName}
            </span>
            <small className="text-muted">See your profile</small>
          </div>
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
      <li>
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <SettingPrimaryColor />
          <small className="text-black fw-bold">Setting</small>
        </button>
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={logout}
        >
          <Logout />
          <small className="text-black fw-bold">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
