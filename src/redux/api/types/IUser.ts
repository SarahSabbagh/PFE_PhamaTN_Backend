export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: string;
  delegation: string;
  pharmacyName: string;
  pharmacyLastname: string;
  image?: string | null;
  phone: string;
  fax: string;
  type?: string | null;
  address: string;
}
export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: number;
  delegation: number;
  pharmacyFirstName: string;
  pharmacyLastName: string;
  image?: File | null;
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
