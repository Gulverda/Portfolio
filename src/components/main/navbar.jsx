import React from 'react';
import '../../CSS/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Apply the navbar class */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
