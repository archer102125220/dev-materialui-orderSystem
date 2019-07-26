import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PosHome from './routes/PosHome';

function RouterConfig({ history }) {
  const state = {
    routeComponent: [
      { key: 'root', path: '/', exact: true, component: PosHome },
    ],
  }

  const renderRoutes = (r) => {
    const { key, exact, path, component: Component } = r;
    return (
      <Route
        key={`route-${key}`}
        exact={exact}
        path={path}
        render={(props) => <Component {...props} />}
      />
    );
  }

  return (
    <Router history={history}>
      <Switch>
        {
          state.routeComponent.map(value => renderRoutes(value))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
