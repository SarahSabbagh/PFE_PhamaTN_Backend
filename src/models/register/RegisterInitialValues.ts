import { ISignUpRequest } from "../../pages/Register";

export const defaultValues: ISignUpRequest = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  pharmacyFirstName: "",
  pharmacyLastName: "",
  governorate: 0,
  delegation: 0,
  address: "",
  role: "2",
  type: "1",
  fax: "",
  phone: "",
};