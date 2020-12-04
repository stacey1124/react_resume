import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import Resume from './js/resume'
import Nav from './js/Nav'
import App from './App';

import './index.css';


ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="resume" component={Resume} />
      <Route path="nav" component={Nav} />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);

