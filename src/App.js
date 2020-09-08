import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path="/project/:id" component={ProjectPage} />
    </Fragment>
  );
}

export default App;
