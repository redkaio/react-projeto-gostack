import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';
import Header from '../pages/Header/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
    <Route path="/header" component={Header} />
  </Switch>
);

export default Routes;
