// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <NavLink to="/">
          <img src="./Logo.png" alt="Website Logo" className="logo-image" />
        </NavLink>
      </div>
      <h1 className='line'>|</h1>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'link active' : 'link'}>Projects</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'link active' : 'link'}>Services</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
