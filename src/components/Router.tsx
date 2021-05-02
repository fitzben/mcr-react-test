import React from 'react';
import { Route, Switch, Router as ReactRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from './Homepage';

export default function Router() {
  const browserHistory = createBrowserHistory()
  return (
    <ReactRouter history={browserHistory}>
      <Switch>
        <Route path="/home" component={Homepage} />
      </Switch>
    </ReactRouter>
  )
}