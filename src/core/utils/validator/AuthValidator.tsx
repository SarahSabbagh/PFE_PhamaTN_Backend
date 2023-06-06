import { number, object, string } from "zod";
import z from "zod";
import i18next from "i18next";
const phoneExp = /^[2|9|5|7][0-9]{7}$/;
const faxExp = /^7[0-9]{7}$/;

const translate = (key: string): string => i18next.t(key) || "";

//----- Login Schema
export const loginSchema = object({
  email: string()
    .nonempty(translate("errorMessages.IS_REQUIRED"))
    .email(translate("errorMessages.EMAIL_INVALID")),
  password: string()
    .nonempty(translate("errorMessages.IS_REQUIRED"))
    .min(8, translate("errorMessages.PASSWORD_MIN_8_CHARACTERS"))
    .max(32, translate("errorMessages.PASSWORD_LESS_32_CHARACTERS")),
});
//------signUp Schema
export const signUpSchema = loginSchema
  .extend({
    name: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .max(60, translate("errorMessages.max_60_CHARACTERS"))
      .min(3, translate("errorMessages.min_3_CHARACTERS")),

    confirmPassword: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .min(8, translate("errorMessages.PASSWORD_MIN_8_CHARACTERS"))
      .max(32, translate("errorMessages.PASSWORD_LESS_32_CHARACTERS")),
    pharmacyFirstName: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .max(60, translate("errorMessages.max_60_CHARACTERS"))
      .min(3, translate("errorMessages.min_3_CHARACTERS")),
    pharmacyLastName: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .max(60, translate("errorMessages.max_60_CHARACTERS"))
      .min(3, translate("errorMessages.min_3_CHARACTERS")),
    governorate: number().positive(translate("errorMessages.IS_REQUIRED")),
    delegation: number().positive(translate("errorMessages.IS_REQUIRED")),
    address: string().nonempty(translate("errorMessages.IS_REQUIRED")),
    role: string().nonempty(translate("errorMessages.IS_REQUIRED")),
    type: string().nullable(),
    image: z.instanceof(FileList).optional().nullable(),
    phone: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .regex(phoneExp || faxExp, translate("errorMessages.INVALID")),
    fax: string()
      .nonempty(translate("errorMessages.IS_REQUIRED"))
      .regex(phoneExp || faxExp, translate("errorMessages.INVALID")),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: translate("errorMessages.INVALID"),
  });
