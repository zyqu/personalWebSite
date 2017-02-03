import React from 'react';

import './Footer.css';
import reactLogo from '../assets/react-logo.png';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Built with <img className="Footer__logo" src={reactLogo} alt="React.js Logo" /> <a href="https://facebook.github.io/react/" target="_blank">React</a>. </p>
    </footer>
  );
};

export default Footer;
