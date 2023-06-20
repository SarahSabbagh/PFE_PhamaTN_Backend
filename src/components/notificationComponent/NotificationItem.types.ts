import { INotificationResponse } from "../../redux/api/types/INotification";

export interface NotificationItemProps {
  item: INotificationResponse;
  handleMarkAsReadNotification: (id: string | undefined) => void;
}
