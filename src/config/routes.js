// React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const routes = (
  <Router
    history={browserHistory}
    onUpdate={()=> {
      setTimeout(()=>window.scrollTo(0, 0), 300);
    }}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="work" component={Work} />
      <Route path="resume" component={Resume} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

export default routes;
