import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Notification } from '../../assets/icons';
import Avatar from '../../components/ui/Avatar';
import DropdownMenu from './DropdownMenu';

function AuthUserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center">
        <Link className="text-decoration-none text-dark" to="/">
          <Notification />
          <span className="p-10px">Notification</span>
        </Link>

        <div>
          <Link
            className="text-decoration-none text-dark"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Avatar />
            <span className="p-10px">Good Morning, Alex!</span>
          </Link>

          <DropdownMenu open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
}

export default AuthUserMenu;
