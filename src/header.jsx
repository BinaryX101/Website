// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.css';


const Header = () => {
  return (
    <header style={styles.header}>
      <div className="title">
        <h1>My MASSIVE, yeah, i mean MASSIVE website</h1>
      </div>
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>Absolutly</a>
        <a href="#projects" style={styles.link}>MASSIVE</a>
        <a href="#contact" style={styles.link}>website</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default Header;
