import React, { PropTypes } from 'react';

import SillyWordContainer from '../containers/SillyWordContainer.js';

import './Header.css';

const Header = ({ startingNoun }) => {
  return (
    <header className="Header">
      <h1 className="Header__main-title">
        Hi, I'm Zhengyang Qu
      </h1>
    </header>
  );
}

Header.propTypes = {
  startingNoun: PropTypes.string,
};

export default Header;
