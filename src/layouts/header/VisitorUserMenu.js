import { Link } from 'react-router-dom';

function VisitorUserMenu() {
  return (
    <div>
      {/* Change to to the real path once when doing authFeature */}
      <Link className="text-decoration-none px-5 text-dark" to="/">
        Login
      </Link>
      <Link
        className="text-decoration-none px-5 py-3 text-dark create-account-btn"
        to="/"
      >
        Create Account
      </Link>
    </div>
  );
}

export default VisitorUserMenu;
