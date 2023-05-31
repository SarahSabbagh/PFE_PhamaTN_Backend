import { useEffect } from "react";
import { echo } from "../core/utils/socketService";
import { INotificationResponse } from "../redux/api/notification/notificationApi";
import { useDispatch } from "react-redux";
import { setNotification } from "../redux/features/notification";

export const useSocket = (id?: number) => {
  const dispatch = useDispatch();
  const addNotification = (data: any) => {
    const newNotification: INotificationResponse = {
      id: data?.id,
      data: data?.data,
      created_at: data?.created_at,
    };
    dispatch(setNotification(newNotification));
    console.log(newNotification);
  };
  useEffect(() => {
    if (id) {
      const channel = echo.private(`user${id}-channel`);
      channel.notification(addNotification);
      //channel.listen(".user1Event", addNotification);

      return () => {
        echo.leave(`user${id}-channel`);
      };
    }
  });
};
