import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-170020240-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/project/:id" component={ProjectPage} />
    </Fragment>
  );
}

export default App;
