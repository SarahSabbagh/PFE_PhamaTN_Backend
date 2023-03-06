export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  governorate: string;
  city: string;
  pharmacyName: string;
  pharmacyLastname: string;
  phone: number;
  fax: number;
  type: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
