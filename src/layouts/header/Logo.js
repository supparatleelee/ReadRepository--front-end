import { Link } from 'react-router-dom';
import { ReadRepositoryLogo } from '../../assets/icons';

function Logo() {
  return (
    <>
      <Link className="navbar-brand" to="/">
        <ReadRepositoryLogo />
      </Link>
    </>
  );
}

export default Logo;
