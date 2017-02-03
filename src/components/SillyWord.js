import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './SillyWord.css';

const SillyWord = ({ type, word, changeWord }) => {
  const SillyWordClasses = classNames({
    'SillyWord': true,
    'SillyWord--adj': (type === 'adj'),
    'SillyWord--noun': (type === 'noun'),
  });
  return (
    <span className={SillyWordClasses} onClick={changeWord}>{word}</span>
  );
}

SillyWord.propTypes = {
  type: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  changeWord: PropTypes.func.isRequired,
};

export default SillyWord;
