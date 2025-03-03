// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link to="/Website">
          <img src="./Logo.png" alt="Website Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/Website" className="link">Home</Link>
        <Link to="/Website/activities" className="link">Activities</Link>
        <Link to="/Website/about-us" className="link">About</Link>
        <Link to="/Website/map" className="link">Map</Link>
        <Link to="/Website/contact" className="link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
