import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './layouts/Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
