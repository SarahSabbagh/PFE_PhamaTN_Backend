import { IUser } from "./IUser";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: number;
  delegation: number;
  pharmacyFirstName: string;
  pharmacyLastName: string;
  image?: FileList | null;
  phone: string;
  fax: string;
  type?: string | null;
  address: string;
}
export interface ILoginResponse {
  status: string;
  message: string;
  user: IUser;
  access_token: string;
}

export interface IRegisterResponse {
  status: string;
  message: string;
  user: IUser;
}
export interface IErrorResponseLogin {
  status: string;
  message: string;
}

export interface IErrorResponseRegister {
  errors: IError[];
  message: string;
}
export interface IError {
  image?: string[];
  email?: string[];
}
export interface IUserFilterRequest {
  role?: number;
  status?: number;
  activationMode?: boolean;
  search?: string;
}
export interface IResponse {
  status?: string;
  message?: string;
}
