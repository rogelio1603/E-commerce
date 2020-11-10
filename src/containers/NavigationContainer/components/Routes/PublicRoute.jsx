import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute(props) {
  const { Component, isAuthenticated, ...routeProps } = props;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route component={Component} {...routeProps} />;
}

PublicRoute.propTypes = {
  Component: PropTypes.object,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  exact: PropTypes.bool,
};

export { PublicRoute };
