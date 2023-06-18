export interface INotificationResponse {
  id: string;
  created_at: string;
  data: {
    notification: string;
    message?: string;
    codeLot?: string;
  };
}
