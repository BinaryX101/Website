// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
      <Link to="/">
          <img src="./Logo.png" alt="Website Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/portfolio" className="link">Portfolio</Link>
        <Link to="/about-us" className="link">About Me</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
