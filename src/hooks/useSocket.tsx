import { useEffect } from "react";
import { echo } from "../core/utils/socketService";
import { INotificationResponse } from "../redux/api/notification/notificationApi";
import { useDispatch } from "react-redux";
import {
  incrementNotificationCount,
  setNotification,
} from "../redux/features/notification";

export const useSocket = (type: string) => {
  const dispatch = useDispatch();
  const addNotification = (data: any) => {
    const newNotification: INotificationResponse = {
      id: data?.id,
      data: data?.data,
      created_at: data?.created_at,
    };
    //   dispatch(incrementNotificationCount());
    dispatch(setNotification(newNotification));
    console.log(newNotification);
  };
  useEffect(() => {
    const channel = echo.channel("newUserRegistered-channel");
    if (type === "notification") {
      channel.notification(addNotification);
    }
    return () => {
      echo.leave("newUserRegistered-channel");
    };
  });
};
