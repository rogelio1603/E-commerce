import React from 'react';
// * Routes
import { Switch } from 'react-router-dom';
import * as RouteType from './components/Routes';
// * Containers
import Button from 'components/Button';

function Home() {
  return <div>Home</div>;
}

function Navigation() {
  return (
    <div>
      <Switch>
        <RouteType.PublicRoute
          exact={true}
          path="/login"
          render={() => <div>Login</div>}
        />
        <RouteType.NeutralRoute
          exact={true}
          path="/button"
          Component={Button}
        />
        <RouteType.PrivateRoute
          isAuthenticated={false}
          exact={true}
          path="/"
          Component={Home}
        />
      </Switch>
    </div>
  );
}

export default Navigation;
