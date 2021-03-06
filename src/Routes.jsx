import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, WikipediaViewer, Weather, Quotes, Twitch } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/wiki" component={WikipediaViewer} />
    <Route path="/weather" component={Weather} />
    <Route path="/quotes" component={Quotes} />
    <Route path="/twitch" component={Twitch} />
  </Switch>
);

export default Routes;
