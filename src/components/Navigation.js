import React from 'react';
import { Link, IndexLink } from 'react-router';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <h2>What would you like to do?</h2>
      <p className="h3"><Link to="/about" className="Navigation__link" activeClassName="Navigation__link--active">Learn more about me</Link></p>
      <p className="h3"><Link to="/work" className="Navigation__link" activeClassName="Navigation__link--active">View my work</Link></p>
      <p className="h3"><Link to="/resume" className="Navigation__link" activeClassName="Navigation__link--active">Publications</Link></p>
      <p className="h3"><Link to="/contact" className="Navigation__link" activeClassName="Navigation__link--active">Get in touch</Link></p>
      <p className="h3"><IndexLink to="/" className="Navigation__link Navigation__link--home" activeClassName="Navigation__link--active">Go back home</IndexLink></p>
    </nav>
  )
}

export default Navigation;
