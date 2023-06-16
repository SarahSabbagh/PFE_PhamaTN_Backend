import { IUser } from "./IUser";

export interface ISearchMed {
  dci?: string;
  form?: string;
  category?: string;
  marque?: string;
  dosage?: string;
}
export interface ISearchMedRequest extends ISearchMed {
  userId: number;
}
export interface ISearchMedResponse {
  user: IUser;
  lng: number;
  lat: number;
  distance: number;
}
