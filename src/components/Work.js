import React from 'react';

import Header from './Header';
import Navigation from './Navigation.js';
import Footer from './Footer';

const Work = () => {
  return (
    <div className="Work">
      <Header startingNoun="accomplishments" />
      <h2>Projects</h2>

      <section className="Work__project">
        <h3><a href="https://play.google.com/store/apps/details?id=com.webshield.appshield" target="_blank">AppShield</a></h3>

        <h4>Bring-your-own-device (BYOD) solution based on application rewriting</h4>
        <p className="lead">By hooking the low-level system calls, AppShield rewrote any general Android application
                            and injected Mobile Application Management (MAM) features into it. It can enforce
                            arbitrary control policy in the domain of privileged enterprise data without operating
                            system modification.</p>

        <h5>Built With</h5>
        <ul>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="https://play.google.com/store/apps/details?id=com.version1.autocog&hl=en" target="_blank">AutoCog</a></h3>

        <h4>Predicting mobile app permission usage with a learning-based approach </h4>
        <p className="lead">AutoCog included natural language processing techniques and our machine learning
                            algorithm to relate application description with permissions. Our system automatically
                            derived a model that can be queried against with descriptions to get the expected permissions.
                            Our large-scale measurements over 45,811 applications demonstrated the severity
                            of lacking the explanation of sensitive permission usage.</p>

        <h5>Built With</h5>
        <ul>
          <li>Python</li>
          <li>Stanford Parser</li>
          <li>Natural Language Toolkit (NLTK)</li>
          <li>Java</li>
        </ul>
      </section>

      <section className="Work__project">
        <h3><a href="https://play.google.com/store/apps/details?id=com.webshield.privacyshield" target="_blank">PrivacyShield</a></h3>

        <h4>A tool that detects and prevents user privacy leakage by 3rd party mobile applications</h4>
        <p className="lead">Rewrite Android app to implement Taint-tracking across Android framework code, handling
                            callback functions</p>

        <h5>Built With</h5>
        <ul>
          <li>Scala</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </section>


      <Navigation />
      <Footer />
    </div>
  );
}

export default Work;
