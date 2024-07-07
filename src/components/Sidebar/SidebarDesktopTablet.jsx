// SidebarDesktopTablet.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SidebarDesktopTablet = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/about" className="navbar__link">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/projects" className="navbar__link">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/contact" className="navbar__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarDesktopTablet;
