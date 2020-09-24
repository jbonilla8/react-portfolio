import React, { Fragment } from 'react';
import { Route, Router } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

function App() {

  ReactGA.initialize('UA-170020240-1');

  var history = createBrowserHistory();

  history.listen((location) => {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview');
  });

  return (
    <Fragment>
      <Router history={history}>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectPage} />
      </Router>
    </Fragment>
  );
}

export default App;
