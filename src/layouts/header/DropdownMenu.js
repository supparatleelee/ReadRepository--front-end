import { Link } from 'react-router-dom';
import { Logout, SettingPrimaryColor } from '../../assets/icons';
import Avatar from '../../components/ui/Avatar';

function DropdownMenu({ open, onClose }) {
  return (
    <ul
      className={`dropdown-menu px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
    >
      <li>
        <Link
          // Change to /profile/${id} later
          to="/profile"
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={onClose}
        >
          <Avatar />
          <div className="d-flex flex-column">
            <span className="text-black fw-bold">Hsiao Li</span>
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
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <Logout />
          <small className="text-black fw-bold">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
