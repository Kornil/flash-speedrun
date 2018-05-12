import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, WikipediaViewer, Weather } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/wiki" component={WikipediaViewer} />
    <Route path="/weather" component={Weather} />
  </Switch>
);

export default Routes;
