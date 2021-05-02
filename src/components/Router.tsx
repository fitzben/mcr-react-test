import React from 'react';
import { Route, Switch, Router as ReactRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from './Homepage';
import Movies from './Movies';
import Series from './Series';

export default function Router() {
  const browserHistory = createBrowserHistory()
  return (
    <ReactRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Switch>
        <Route exact path="/movies" component={Movies} />
      </Switch>
      <Switch>
        <Route exact path="/series" component={Series} />
      </Switch>
    </ReactRouter>
  )
}