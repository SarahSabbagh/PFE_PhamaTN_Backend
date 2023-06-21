import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Button, Divider, Grid, List, Stack, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import InboxIcon from "@mui/icons-material/Inbox";
import { useMarkAsReadMutation } from "../redux/api/notification/notificationApi";
import { StyledPaper } from "../components/commonComponents/customPaper/StyledPaper.style";
import { StyledTitle } from "../components/commonComponents/table/tableToolBar/TableToolBar.style";
import { Loader } from "../components/commonComponents/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  decrementNotificationCount,
  resetNotificationCount,
  setNotifications,
} from "../redux/features/notification";
import { IUser } from "../redux/api/types/IUser";
import { INotificationResponse } from "../redux/api/types/INotification";
import { useTranslation } from "react-i18next";
import { NotificationItem } from "../components/notificationComponent/NotificationItem";

export const Notifications: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const notifications: INotificationResponse[] = useSelector(
    (state: RootState) => state.notification.notifications!
  );
  const user: IUser = useSelector((state: RootState) => state.user.user!);
  const [markAsRead, { isSuccess: isSuccessMarkAsRead }] =
    useMarkAsReadMutation();

  const handleMarkAsReadNotification = (id: string | undefined) => {
    user && markAsRead({ userId: user.id, id }).unwrap();
    if (isSuccessMarkAsRead) {
      if (id) {
        dispatch(decrementNotificationCount);
        dispatch(decrementNotificationCount);
        dispatch(
          setNotifications(notifications.filter((item) => item.id !== id))
        );
      } else {
        dispatch(resetNotificationCount);
        dispatch(setNotifications([]));
      }
    }
  };

  return (
    <PageContainer title={t("notification.TITLE_PAGE_NOTIFICATION")}>
      <StyledPaper>
        <Grid
          direction="row"
          container
          justifyContent={"space-between"}
          sx={{ pb: 2 }}
        >
          <StyledTitle>{t("notification.TITLE_NOTIFICATION")}</StyledTitle>
          <Button
            variant="text"
            onClick={() => handleMarkAsReadNotification(undefined)}
            startIcon={<DoneAllIcon />}
          >
            {t("notification.MARK_ALL_AS_READ")}
          </Button>
        </Grid>
        <Divider />
        <List>
          {notifications ? (
            notifications.length > 0 ? (
              notifications.map((item: INotificationResponse, index) => (
                <>
                  <NotificationItem
                    key={item.id}
                    item={item}
                    handleMarkAsReadNotification={handleMarkAsReadNotification}
                  />
                  <Divider key={index} />
                </>
              ))
            ) : (
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <InboxIcon color="disabled" fontSize="large" />
                <Typography> {t("notification.NO_NOTIFICATION")} </Typography>
              </Stack>
            )
          ) : (
            <Loader />
          )}
        </List>
      </StyledPaper>
    </PageContainer>
  );
};
