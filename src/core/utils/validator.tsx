import { object, string } from "zod";
import { errorMessage } from "../constants/errorMessages";

// ? Login Schema with Zod
export const loginSchema = object({
  email: string()
    .min(1, errorMessage.Email_IS_REQUIRED)
    .email(errorMessage.EMAIL_INVALID),
  password: string()
    .min(1, errorMessage.PASSWORD_IS_REQUIRED)
    .min(8, errorMessage.PASSWORD_MIN_8_CHARACTERS)
    .max(32, errorMessage.PASSWOED_LESS_32_CHARACTERS),
});
