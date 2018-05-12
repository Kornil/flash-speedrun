import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, WikipediaViewer } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/wiki" component={WikipediaViewer} />
  </Switch>
);

export default Routes;
