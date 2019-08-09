import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import PosHome from './routes/PosHome';
import MenuEdit from './routes/MenuEdit';
import LayoutSwitch from './routes/LayoutSwitch';


const RouterConfig = ({ history }) => {
  const routeComponent = [
    { key: 'root', path: '/pos', exact: true, component: PosHome },
    { key: 'menu_edit', path: '/admin/menu_edit', exact: true, component: MenuEdit },
  ];
  const redirectComponent = [
    { key: 'root', to: "/pos", From: "/" },
  ];


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
  const renderRedirects = (r) => {
    const { key, to, From } = r;
    return (
      <Redirect
        key={`redirect-${key}`}
        from={From}
        to={to}
      />
    );
  }
  //<Redirect from={From} to={`${this.props.match.url}/his`} />
  return (
    <Router history={history}>
      <Switch>
        <LayoutSwitch>
          {
            routeComponent.map(value => renderRoutes(value))
          }
          {
            redirectComponent.map(value => renderRedirects(value))
          }
        </LayoutSwitch>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
