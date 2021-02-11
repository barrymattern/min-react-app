import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  return (
    // If "authenticated" is not in props, redirect to home page
    <Route {...props}>
      {(props.authenticated) ? props.children : <Redirect to="/login"/>}
    </Route>
  )
};

export default ProtectedRoute;
