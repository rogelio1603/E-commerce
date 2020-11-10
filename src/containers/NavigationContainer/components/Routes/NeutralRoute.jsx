import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function NeutralRoute(props) {
  const { Component, ...routeProps } = props;

  return <Route component={Component} {...routeProps} />;
}

NeutralRoute.propTypes = {
  Component: PropTypes.object,
  path: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool,
  exact: PropTypes.bool,
};

export { NeutralRoute };
