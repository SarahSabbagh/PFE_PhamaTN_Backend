import { IUser } from "./IUser";

export interface INotificationResponse {
  id: string;
  created_at: string;
  data: {
    notification: string;
    marque?: string;
    dosage?: string;
    codeLot?: string;
    newUser?: IUser;
    message?: string;
  };
}
