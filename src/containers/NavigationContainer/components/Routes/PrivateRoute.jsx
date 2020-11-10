import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  const { Component, isAuthenticated, ...routeProps } = props;

  if (isAuthenticated) {
    return <Route component={Component} {...routeProps} />;
  }

  return <Redirect to="/login" />;
}

PrivateRoute.propTypes = {
  Component: PropTypes.object,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  exact: PropTypes.bool,
};

export { PrivateRoute };
