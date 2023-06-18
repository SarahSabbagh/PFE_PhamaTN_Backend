import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAccessToken } from "../../hooks/authHooks";
import { Props } from "./PrivateRoute.types";
import { paths } from "../../core/constants/path";

export const PrivateRouteNoAuth: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAccessToken();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      return navigate(paths.DASHBOARD);
    }
  }, [isAuthenticated]);
  if (isAuthenticated) {
    return <Navigate to={paths.DASHBOARD} />;
  }
  return <RouteComponent />;
};
