import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <ul className="horizontal-navbar__menu">
        <li className="horizontal-navbar__item">
          <Link to="/" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li className="horizontal-navbar__item">
          <Link to="/about" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </Link>
        </li>
        <li className="horizontal-navbar__item">
          <Link to="/projects" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </Link>
        </li>
        <li className="horizontal-navbar__item">
          <Link to="/contact" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavbar;
