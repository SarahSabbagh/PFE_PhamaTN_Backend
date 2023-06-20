import { number, object, string } from "zod";
import z from "zod";

const phoneExp = /^[2|9|5|7][0-9]{7}(?:\s*)$/;
const faxExp = /^7[0-9]{7}(?:\s*)$/;

export const ProfilSchema = object({
  id: number(),
  name: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .max(60, "errorMessages.max_60_CHARACTERS")
    .min(3, "errorMessages.min_3_CHARACTERS"),
  password: string()
    .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
    .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS")
    .optional(),
  confirmPassword: string()
    .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
    .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS")
    .optional(),
  pharmacyFirstName: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .max(60, "errorMessages.max_60_CHARACTERS")
    .min(3, "errorMessages.min_3_CHARACTERS"),
  pharmacyLastName: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .max(60, "errorMessages.max_60_CHARACTERS")
    .min(3, "errorMessages.min_3_CHARACTERS"),
  image: z.instanceof(FileList).optional().nullable(),
  phone: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .regex(phoneExp || faxExp, "errorMessages.INVALID"),
  fax: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .regex(phoneExp || faxExp, "errorMessages.INVALID"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "errorMessages.INVALID",
});
