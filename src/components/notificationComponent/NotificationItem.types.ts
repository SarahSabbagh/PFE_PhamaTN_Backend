import { INotificationResponse } from "../../redux/api/types/INotification";

export interface NotificationItemProps {
  item: {
    id: string;
    created_at: string;
    data: {
      notification: string;
      marque?: string;
      dosage?: string;
      codeLot?: string;
      name?: string;
      email?: string;
      message?: string;
    };
  };
  handleMarkAsReadNotification: (id: string | undefined) => void;
}
