import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <p className="lead">
        I love snowboarding, video games, soccer, and technology.<br />
        I am currently a fifth-year Ph.D. student in Computer Science at <a href="http://www.mccormick.northwestern.edu/eecs" target="_blank">Dept. of Electrical Engineering &amp; Computer Science</a> of <a href="http://www.northwestern.edu" target="_blank">Northwestern University</a>, advised by <a href="http://www.cs.northwestern.edu/~ychen" target="_blank">Prof. Yan Chen.</a>  <br />
        Email: myFirstNamemyLastName2017 AT u dot northwestern dot edu
      </p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Home;
