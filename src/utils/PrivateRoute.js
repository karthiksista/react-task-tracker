import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ isAuth, component: RouteComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
}

export default PrivateRoute;
