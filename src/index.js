// React
import { render } from 'react-dom';

// Router
import routes from './config/routes.js';

import ga from 'react-google-analytics';
import 'autotrack';
import 'autotrack/lib/plugins/url-change-tracker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

render(
  routes,
  document.getElementById('root')
);

ga('create', 'UA-91339257-1', 'auto');
ga('require', 'urlChangeTracker');
ga('send', 'pageview');


