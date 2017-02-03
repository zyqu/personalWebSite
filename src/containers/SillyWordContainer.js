import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import ga from 'react-google-analytics';

import SillyWord from '../components/SillyWord';

// Get word data
import words from '../data/words';

class SillyWordContainer extends Component {
  constructor(props) {
    super(props);

    // If we were passed a starting word, use it
    if (props.startingWord) {
      this.state = {
        word: props.startingWord
      };
    } else {
      // Get a random word of the correct type
      this.state = {
        word: words[props.type][Math.floor(Math.random() * words[props.type].length)]
      };
    }

    autobind(this);
  }

  handleChangeWord() {
    const newWord = words[this.props.type][Math.floor(Math.random() * words[this.props.type].length)];
    // Get a random word of the correct type
    this.setState({
      word: newWord
    });

    ga('send', 'event', 'madlibs', 'change', `${this.props.type}: ${newWord}`);
  }

  render() {
    return (
      <SillyWord
        type={this.props.type}
        word={this.state.word}
        changeWord={this.handleChangeWord}
        />
    );
  }
}

SillyWordContainer.propTypes = {
  type: PropTypes.string.isRequired,
  startingWord: PropTypes.string,
};

export default SillyWordContainer;
