import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PosHome from './routes/PosHome';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PosHome} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
