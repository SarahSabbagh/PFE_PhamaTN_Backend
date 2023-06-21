import * as React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RoleProps } from "./PrivateRoute.types";
import { paths } from "../../core/constants/path";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export const PrivateRouteRole: React.FC<RoleProps> = ({
  component: RouteComponent,
  accessibleRoles,
}) => {
  const navigate = useNavigate();
  const { currentRole } = useCurrentUser();
  React.useEffect(() => {
    if (currentRole && !accessibleRoles.includes(currentRole)) {
      return navigate(paths.PAGE_NOT_FOUND, { replace: true });
    }
    if (!currentRole) {
      return navigate(paths.LOGIN, { replace: true });
    }
  }, [currentRole]);

  if (currentRole && accessibleRoles.includes(currentRole)) {
    <Navigate to={paths.PAGE_NOT_FOUND} />;
  } else if (!currentRole) {
    <Navigate to={paths.LOGIN} />;
  }
  return <RouteComponent />;
};
