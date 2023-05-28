import * as React from "react";
import { Footer } from "./footer/Footer";
import { Grid } from "@mui/material";
import { ResponsiveSideBar } from "./sidebar/Sidebar";
import { ResponsiveAppBar } from "./navbar/Navbar";
import { useSocket } from "../hooks/useSocket";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { useNewUserRegisteredQuery } from "../redux/api/notification/notificationApi";
import { useDispatch } from "react-redux";
import { setNotificationCount } from "../redux/features/notification";

interface ILayout {
  children: JSX.Element;
}

export const Layout: React.FC<ILayout> = (prop) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { data: user } = useGetUserQuery();
  const { data, isSuccess } = useNewUserRegisteredQuery(user?.id ?? 0);
  React.useEffect(() => {
    if (isSuccess) {
      dispatch(setNotificationCount(data.length));
    }
  }, [data]);

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
