import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <ul className="horizontal-navbar__menu">
        <li className="horizontal-navbar__item">
          <a href="/" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li className="horizontal-navbar__item">
          <a href="/about" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </a>
        </li>
        <li className="horizontal-navbar__item">
          <a href="/projects" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </a>
        </li>
        <li className="horizontal-navbar__item">
          <a href="/contact" className="horizontal-navbar__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavbar;
