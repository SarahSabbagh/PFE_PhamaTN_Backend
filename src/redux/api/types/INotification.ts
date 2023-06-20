export interface INotificationResponse {
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
}
