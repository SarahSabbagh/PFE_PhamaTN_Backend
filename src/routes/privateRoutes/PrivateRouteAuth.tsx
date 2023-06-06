import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAccessToken } from "../../hooks/authHooks";
import { Props } from "./PrivateRoute.types";
import { paths } from "../../core/constants/path";

export const PrivateRouteAuth: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const isAuthenticated = useAccessToken();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuthenticated) {
      return navigate(paths.LOGIN);
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <RouteComponent />;
  }
  return <Navigate to={paths.LOGIN} />;
};
