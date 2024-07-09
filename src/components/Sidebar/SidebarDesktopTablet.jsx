// SidebarDesktopTablet.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SidebarDesktopTablet = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/projects" className="navbar__link">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarDesktopTablet;
