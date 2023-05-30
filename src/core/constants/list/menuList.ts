import i18next from "i18next";
import { paths } from "../path";

const translate = (key: string): string => i18next.t(key) || "";

export interface ISideBarMenuList {
  id: string;
  title: string;
  url: string;
}
export const pageLogin = [
  {
    id: "LOGIN",
    title: translate("login.SIGN_IN"),
    url: paths.LOGIN,
  },
];

export const pageRegister = [
  {
    id: "REGISTER",
    title: translate("register.SIGN_UP"),
    url: paths.REGISTER,
  },
];
