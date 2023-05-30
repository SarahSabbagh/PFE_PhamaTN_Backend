import * as React from "react";
import { Footer } from "./footer/Footer";
import { Grid } from "@mui/material";
import { ResponsiveSideBar } from "./sidebar/Sidebar";
import { ResponsiveAppBar } from "./navbar/Navbar";
import { useSocket } from "../hooks/useSocket";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { useNotificationsQuery } from "../redux/api/notification/notificationApi";
import { useDispatch } from "react-redux";
import { setNotifications } from "../redux/features/notification";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { setUser } from "../redux/features/userSlice";

interface ILayout {
  children: JSX.Element;
}

export const Layout: React.FC<ILayout> = (prop) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { data: user, isSuccess: isSuccessUser } = useGetUserQuery();
  const { data, isSuccess } = useNotificationsQuery(user?.id ?? skipToken);
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setNotifications(data));
    }
  }, [data]);
  React.useEffect(() => {
    if (isSuccessUser) {
      dispatch(setUser(user));
    }
  }, [user]);

  useSocket("notification");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <ResponsiveAppBar
        openDrawer={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Grid container item>
        <Grid item xs="auto">
          <ResponsiveSideBar
            openDrawer={open}
            handleDrawerClose={handleDrawerClose}
          />
        </Grid>
        <Grid item xs>
          {prop.children}
        </Grid>
      </Grid>
    </Grid>
  );
};
export const LayoutLogin: React.FC<ILayout> = (prop) => {
  return (
    <Grid>
      <ResponsiveAppBar />
      {prop.children}
      <Footer />
    </Grid>
  );
};
