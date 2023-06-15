import * as React from "react";
import { Footer } from "./footer/Footer";
import { Grid } from "@mui/material";
import { ResponsiveSideBar } from "./sidebar/Sidebar";
import { ResponsiveAppBar } from "./navbar/Navbar";
import { useSocket } from "../hooks/useSocket";
import { useNotificationsQuery } from "../redux/api/notification/notificationApi";
import { useDispatch } from "react-redux";
import { setNotifications } from "../redux/features/notification";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Outlet } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Navigate, useNavigate } from "react-router-dom";
import { useAccessToken } from "../hooks/authHooks";
import { paths } from "../core/constants/path";

interface ILayout {
  children: JSX.Element;
}

export const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { user } = useCurrentUser();
  const isAuthenticated = useAccessToken();
  const navigate = useNavigate();
  const { data, isSuccess } = useNotificationsQuery(user?.id ?? skipToken);
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setNotifications(data));
    }
  }, [data]);
  useSocket(user?.id);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (!isAuthenticated) {
      return navigate(paths.LOGIN);
    }
  }, [isAuthenticated]);
  return (
    <Grid container>
      <ResponsiveAppBar
        openDrawer={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Grid container item>
        <Grid item>
          <ResponsiveSideBar
            openDrawer={open}
            handleDrawerClose={handleDrawerClose}
          />
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};
export const LayoutLogin: React.FC<ILayout> = (props) => {
  const { children } = props;
  return (
    <Grid>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </Grid>
  );
};
