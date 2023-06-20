import { number, object, string } from "zod";
import z from "zod";

const phoneExp = /^[2|9|5|7][0-9]{7}$/;
const faxExp = /^7[0-9]{7}$/;

export const loginSchema = object({
  email: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .email("errorMessages.EMAIL_INVALID"),
  password: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
    .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS"),
});

export const signUpSchema = loginSchema
  .extend({
    name: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .max(60, "errorMessages.max_60_CHARACTERS")
      .min(3, "errorMessages.min_3_CHARACTERS"),

    confirmPassword: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
      .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS"),
    pharmacyFirstName: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .max(60, "errorMessages.max_60_CHARACTERS")
      .min(3, "errorMessages.min_3_CHARACTERS"),
    pharmacyLastName: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .max(60, "errorMessages.max_60_CHARACTERS")
      .min(3, "errorMessages.min_3_CHARACTERS"),
    governorate: number().positive("errorMessages.IS_REQUIRED"),
    delegation: number().positive("errorMessages.IS_REQUIRED"),
    address: string().nonempty("errorMessages.IS_REQUIRED"),
    role: string().nonempty("errorMessages.IS_REQUIRED"),
    type: string().nullable(),
    image: z.instanceof(FileList).optional().nullable(),
    phone: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .regex(phoneExp || faxExp, "errorMessages.INVALID"),
    fax: string()
      .nonempty("errorMessages.IS_REQUIRED")
      .regex(phoneExp || faxExp, "errorMessages.INVALID"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "errorMessages.INVALID",
  });
