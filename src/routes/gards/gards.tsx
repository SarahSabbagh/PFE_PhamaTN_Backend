import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAccessToken } from "../../hooks/authHooks";

interface Props {
  component: React.ComponentType;
  path?: string;
}
export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAccessToken();

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};
export const PrivateRouteNoAuth: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAccessToken();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <RouteComponent />;
};
