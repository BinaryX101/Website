// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='Contact'>
            <h2>Contact</h2>
            <p>Phone Number: 123456789</p>
            <p>Email: example@gmail.com</p>
        </div>
        <div className='Useful-Links'>
            <h2>Useful links</h2>
            <a href="https://www.scouts.org.uk" target="_blank" rel="noopener noreferrer">» National Website</a><br></br>
            <a href="https://shop.scouts.org.uk" target="_blank" rel="noopener noreferrer">» Scout Shop</a>
        </div>
        <div className='extra'>
            <h2>extra</h2>
        </div>
        <h4>&copy; {new Date().getFullYear()} 2nd Didcot Methodist Scouts. All rights reserved.</h4>
    </footer>
  );
};

export default Footer;
