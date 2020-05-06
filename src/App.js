import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Auth, Home } from './pages/index';
import { connect } from "react-redux";


const App = props => {
    const { loggedIn } = props;
    
    return (
      <div className="wrapper">
        <Switch>
          <Route
            exact
            path={["/login", "/register"]}
            render={() => (!loggedIn ? <Auth /> : <Redirect to="/" />)}
          />
          <Route
            path={["/", "/im/:id"]}
            render={() => (loggedIn ? <Home /> : <Redirect to="/login" />)}
          />
        </Switch>
      </div>
    );
};

export default connect( state  => ({ loggedIn: state.user.loggedIn }))(App);
