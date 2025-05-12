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
            <a href="http://localhost:5173/Website/" target="_blank" rel="noopener noreferrer">» Example link 1</a><br></br>
            <a href="http://localhost:5173/Website/" target="_blank" rel="noopener noreferrer">» Example Link 2</a>
        </div>
        <div className='extra'>
            <h2>Extra</h2>
            <p>Extra information 1</p>
            <p>Extra information 2</p>
        </div>

        <h4>&copy; {new Date().getFullYear()} Your name/business. All rights reserved.</h4>
    </footer>
  );
};

export default Footer;
