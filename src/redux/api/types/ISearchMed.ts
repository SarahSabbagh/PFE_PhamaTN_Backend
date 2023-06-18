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
export interface ItransformedSearchMedResponse {
  name: string;
  address: string;
  lng: number;
  lat: number;
  distance: number;
}
export interface forwardGeocoder {
  lng: number;
  lat: number;
}
