import { any, literal, number, object, optional, string } from "zod";
import { errorMessage } from "../constants/errorMessages";

const phoneExp = /^[2|9|5|7][0-9]{7}$/;
const faxExp = /^7[0-9]{7}$/;
const MAX_FILE_SIZE = 2 * 1024 * 1024;

//----- Login Schema
export const loginSchema = object({
  email: string()
    .email(errorMessage.EMAIL_INVALID)
    .nonempty(errorMessage.IS_REQUIRED),
  password: string()
    .nonempty(errorMessage.IS_REQUIRED)
    .min(8, errorMessage.PASSWORD_MIN_8_CHARACTERS)
    .max(32, errorMessage.PASSWORD_LESS_32_CHARACTERS),
});
//------signUp Schema
export const signUpSchema = loginSchema
  .extend({
    name: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .max(60, errorMessage.max_60_CHARACTERS)
      .min(3, errorMessage.min_3_CHARACTERS),

    confirmPassword: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .min(8, errorMessage.PASSWORD_MIN_8_CHARACTERS)
      .max(32, errorMessage.PASSWORD_LESS_32_CHARACTERS),
    pharmacyFirstName: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .max(60, errorMessage.max_60_CHARACTERS)
      .min(3, errorMessage.min_3_CHARACTERS),
    pharmacyLastName: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .max(60, errorMessage.max_60_CHARACTERS)
      .min(3, errorMessage.min_3_CHARACTERS),
    governorate: string().nonempty(errorMessage.IS_REQUIRED),
    delegation: string().nonempty(errorMessage.IS_REQUIRED),
    address: string().nonempty(errorMessage.IS_REQUIRED),
    role: string().nonempty(errorMessage.IS_REQUIRED),
    type: string().nullable(),
    photo:any().optional(),
    /*photo: any()
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max image size is 2MB.`
      )
      .optional(),*/
    phone: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .regex(phoneExp || faxExp),
    fax: string()
      .nonempty(errorMessage.IS_REQUIRED)
      .regex(phoneExp || faxExp, errorMessage.INVALID),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: errorMessage.INVALID,
  });
