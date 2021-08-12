import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  key,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} key={key} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
