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
