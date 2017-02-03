import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <Header startingNoun="wherabouts" />
      <h2>Email</h2>
      <p className="lead">myFirstNamemyLastName2017 AT u dot northwestern dot edu</p>

      <h2>Google Scholar</h2>
      <p className="lead"><a href="https://scholar.google.com/citations?user=lqNG7LQAAAAJ&hl=en&oi=ao" target="_blank">Zhengyang Qu</a></p>

      <h2>Github</h2>
      <p className="lead"><a href="https://github.com/zyqu" target="_blank">zyqu</a></p>

      <h2>LinkedIn</h2>
      <p className="lead"><a href="https://www.linkedin.com/in/zyqu1990" target="_blank">in/zyqu1990</a></p>
      <Navigation />
      <Footer />
    </div>
  );
}

export default Contact;
