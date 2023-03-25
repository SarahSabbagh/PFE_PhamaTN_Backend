import { TypeOf } from "zod";
import { loginSchema, signUpSchema } from "../../../core/utils/validator";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: string;
  delegation: string;
  pharmacyName: string;
  pharmacyLastname: string;
  phone: string;
  fax: string;
  type: string;
  address: string;
}
export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: string;
  delegation: string;
  pharmacyFirstName: string;
  pharmacyLastName: string;
  // image?: any;
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
}
