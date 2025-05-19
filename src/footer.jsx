// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <h2>&copy; {new Date().getFullYear()} Yusuf Abeed. All rights reserved.</h2>
        <a href='/contact'>Get In Touch</a>
    </footer>
  );
};

export default Footer;
