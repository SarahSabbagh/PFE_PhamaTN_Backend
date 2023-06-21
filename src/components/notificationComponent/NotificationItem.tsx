import * as React from "react";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import dayjs from "dayjs";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { StyledTypography } from "../commonComponents/customTypography/customTypography.style";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import TimerOffOutlinedIcon from "@mui/icons-material/TimerOffOutlined";
import { notificationTypes } from "../../core/notificationTypes";
import { DateFormatISO } from "../../core/utils/DateFormat";
import { useTranslation } from "react-i18next";
import { NotificationItemProps } from "./NotificationItem.types";
import { STORAGE_BASE_URL } from "../../configuredURL";

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  const { item, handleMarkAsReadNotification } = props;
  const { t } = useTranslation();
  const type = item.data.notification;
  let message;

  switch (type) {
    case notificationTypes.NEW_REGISTRATION_NOTIFICATION:
      message =
        item.data.newUser?.name +
        t("notification.HAS_REGISTERED") +
        item.data.newUser?.email;
      break;

    case notificationTypes.EXPIRATION_NOTIFICATION:
      message = item.data.codeLot + t("notification.EXPIRED_BATCH");
      break;
    case notificationTypes.EXPIRATION_SOON_NOTIFICATION:
      message = item.data.codeLot! + t("notification.BATCH_EXPIRE_SOON");
      break;
    case notificationTypes.STOCK_OUT_NOTIFICATION:
      message =
        item.data.marque! +
        "," +
        item.data.dosage! +
        t("notification.OUT_STOCK");
      break;
    case notificationTypes.BE_OUT_OF_STOCK_SOON_NOTIFICATION:
      message =
        item.data.marque! +
        "," +
        item.data.dosage! +
        t("notification.OUT_OF_STOCK_SOON");
      break;
    default:
      message = "";
  }

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        {type === notificationTypes.NEW_REGISTRATION_NOTIFICATION && (
          <Avatar
            alt="Avatar"
            src={
              item.data.newUser?.image
                ? STORAGE_BASE_URL + item.data.newUser.image
                : ""
            }
          />
        )}
        {type === notificationTypes.STOCK_OUT_NOTIFICATION && (
          <ErrorOutlineIcon color="error" />
        )}
        {type === notificationTypes.EXPIRATION_SOON_NOTIFICATION && (
          <TimerOutlinedIcon color="warning" />
        )}
        {type === notificationTypes.EXPIRATION_NOTIFICATION && (
          <TimerOffOutlinedIcon color="error" />
        )}
        {type === notificationTypes.BE_OUT_OF_STOCK_SOON_NOTIFICATION && (
          <WarningAmberIcon color="warning" />
        )}
      </ListItemAvatar>
      <ListItemText
        primary={message}
        secondary={
          <Typography sx={{ display: "inline" }} variant="body2" color="grey">
            {DateFormatISO(dayjs(item.created_at))}
          </Typography>
        }
      />
      <Button
        variant="text"
        onClick={() => handleMarkAsReadNotification(item.id)}
        startIcon={<DoneIcon />}
      >
        <StyledTypography variant="button">
          {t("notification.MARK_AS_READ")}
        </StyledTypography>
      </Button>
    </ListItem>
  );
};
