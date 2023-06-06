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
    if (!accessibleRoles.includes(currentRole)) {
      return navigate(paths.PAGE_NOT_FOUND);
    }
  }, []);
  if (accessibleRoles.includes(currentRole)) {
    return <RouteComponent />;
  }

  return <Navigate to={paths.PAGE_NOT_FOUND} />;
};
