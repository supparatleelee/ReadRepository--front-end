import Logo from './Logo';
import SearchBar from './SearchBar';
import VisitorUserMenu from './VisitorUserMenu';
import AuthUserMenu from './AuthUserMenu';
import { useAuth } from '../../contexts/AuthContext';

function Header() {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg min-vh-15">
      <div className="container-fluid marginx-7">
        <Logo />
        <SearchBar />
        {user ? <AuthUserMenu /> : <VisitorUserMenu />}
      </div>
    </nav>
  );
}

export default Header;
