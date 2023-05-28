import React, { useEffect, useState } from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  INotificationResponse,
  useMarkAsReadMutation,
  useNewUserRegisteredQuery,
} from "../redux/api/notification/notificationApi";
import { StyledPaper } from "../components/commonComponents/customPaper/StyledPaper.style";
import { StyledTitle } from "../components/commonComponents/table/tableToolBar/TableToolBar.style";
import { Loader } from "../components/commonComponents/loader/Loader";
import { DateFormatISO } from "../core/utils/DateFormat";
import dayjs from "dayjs";
import { useGetUserQuery } from "../redux/api/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { resetNotification } from "../redux/features/notification";

export const Notifications: FC = () => {
  const dispatch = useDispatch();
  const { data: user } = useGetUserQuery();
  const { data, isSuccess, isLoading } = useNewUserRegisteredQuery(
    user?.id ?? 0
  );
  const [markAsRead] = useMarkAsReadMutation();

  const handleunreadNotification = (id: string | undefined) => {
    user && markAsRead({ userId: user.id, id }).unwrap();
  };

  const [notifications, setNotifications] = useState<INotificationResponse[]>(
    []
  );
  const newNotification: INotificationResponse | null = useSelector(
    (state: RootState) => state.notification.notification
  );
  useEffect(() => {
    if (isSuccess) {
      setNotifications(data);
    }
  }, [isSuccess]);
  useEffect(() => {
    newNotification &&
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    dispatch(resetNotification());
  }, [newNotification]);

  return (
    <PageContainer title="Notifications">
      <StyledPaper sx={{ width: "100%" }}>
        <Grid
          direction="row"
          container
          justifyContent={"space-between"}
          sx={{ pb: 2 }}
        >
          <StyledTitle>Notification</StyledTitle>
          <Button
            variant="text"
            onClick={() => handleunreadNotification(undefined)}
            startIcon={<DoneAllIcon />}
          >
            Mark all as read
          </Button>
        </Grid>
        <Divider />
        {isLoading ? (
          <Loader />
        ) : (
          <List>
            {notifications ? (
              notifications.map((item: INotificationResponse) => (
                <>
                  <ListItem key={item.id} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        item.data.name +
                        " has registered with " +
                        item.data.email
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            variant="body2"
                            color="grey"
                          >
                            {DateFormatISO(dayjs(item.created_at))}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <Button
                      variant="text"
                      onClick={() => handleunreadNotification(item.id)}
                      startIcon={<DoneIcon />}
                    >
                      Mark as read
                    </Button>
                  </ListItem>
                  <Divider />
                </>
              ))
            ) : (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <InboxIcon color="disabled" fontSize="large" />
                <Typography>No notification </Typography>
              </Stack>
            )}
          </List>
        )}
      </StyledPaper>
    </PageContainer>
  );
};
