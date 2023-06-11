import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RoleProps } from "./PrivateRoute.types";
import { paths } from "../../core/constants/path";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useAccessToken } from "../../hooks/authHooks";

export const PrivateRouteRole: React.FC<RoleProps> = ({
  component: RouteComponent,
  accessibleRoles,
}) => {
  const navigate = useNavigate();
  const { currentRole } = useCurrentUser();
  const isAuthenticated = useAccessToken();
  React.useEffect(() => {
    if (currentRole && !accessibleRoles.includes(currentRole)) {
      return navigate(paths.PAGE_NOT_FOUND, { replace: true });
    } else if (!isAuthenticated || !currentRole) {
      return navigate(paths.LOGIN);
    }
  }, [currentRole, isAuthenticated]);

  if (currentRole && accessibleRoles.includes(currentRole)) {
    return <RouteComponent />;
  } else if (!isAuthenticated || !currentRole) {
    return <Navigate to={paths.LOGIN} />;
  } else {
    return <Navigate to={paths.PAGE_NOT_FOUND} />;
  }
};
