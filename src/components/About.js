import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

import bioPic from '../assets/bio-pic.jpg';

const About = () => {
  return (
    <div className="About">
      <Header startingNoun="tale" />
      <img src={bioPic} className="img-responsive" alt="Zhengyang Qu - In Hawaii" />
      <p className="lead">I am currently a fifth-year Ph.D. student in Computer Science at <a href="http://www.mccormick.northwestern.edu/eecs" target="_blank">Dept. of Electrical Engineering &amp; Computer Science</a> of <a href="http://www.northwestern.edu" target="_blank">Northwestern University</a>. I am studying the problems related to Mobile Security. Before that, I received my B.S. degree in Electrical Engineering from Shanghai Jiao Tong University in 2012.</p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default About;
