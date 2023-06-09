import { paths } from "../path";
import { ISideBarMenuList } from "./sideBarMenuList";

export const pageLogin: ISideBarMenuList[] = [
  {
    id: "LOGIN",
    title: "login.SIGN_IN",
    url: paths.LOGIN,
  },
];

export const pageRegister: ISideBarMenuList[] = [
  {
    id: "REGISTER",
    title: "register.SIGN_UP",
    url: paths.REGISTER,
  },
];
