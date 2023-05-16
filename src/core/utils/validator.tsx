import { date, number, object, string } from "zod";
import { errorMessage } from "../constants/errorMessages";
import z from "zod";
import dayjs, { Dayjs } from "dayjs";
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
    governorate: number().positive(errorMessage.IS_REQUIRED),
    delegation: number().positive(errorMessage.IS_REQUIRED),
    address: string().nonempty(errorMessage.IS_REQUIRED),
    role: string().nonempty(errorMessage.IS_REQUIRED),
    type: string().nullable(),
    image: z.instanceof(FileList).optional().nullable(),
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
export const simpleElementSchema = object({
  name: string()
    .nonempty(errorMessage.IS_REQUIRED)
    .max(60, errorMessage.max_60_CHARACTERS),
});

export const medicationSchema = object({
  dci_id: number().positive(errorMessage.IS_REQUIRED),
  marque_id: number().positive(errorMessage.IS_REQUIRED),
  category_id: number().positive(errorMessage.IS_REQUIRED),
  form_id: number().positive(errorMessage.IS_REQUIRED),
  dosage: string().nonempty(errorMessage.IS_REQUIRED),
  description: string().nonempty(errorMessage.IS_REQUIRED),
});
export const medicationEditSchema = medicationSchema.extend({
  id: number().positive(errorMessage.IS_REQUIRED),
});

export const lotSchema = object({
  id: number(),
  medicationName: string().nonempty(errorMessage.IS_REQUIRED),
  medicationDosage: string().nonempty(errorMessage.IS_REQUIRED),
  medicationForm: string().nonempty(errorMessage.IS_REQUIRED),
  medicationCategory: string().nonempty(errorMessage.IS_REQUIRED),
  medicationId: number().positive(errorMessage.IS_REQUIRED),
  codeLot: string().nonempty(errorMessage.IS_REQUIRED),
  manufactureDate: string().refine((value) => dayjs(value).isValid()),
  expirationDate: string().refine((value) => dayjs(value).isValid()),
  unitPrice: number().positive(errorMessage.IS_REQUIRED),
  publicPrice: number().positive(errorMessage.IS_REQUIRED),
}).refine(
  (data) => {
    const manufactureDate = dayjs(data.manufactureDate);
    const expirationDate = dayjs(data.expirationDate);
    return expirationDate.isAfter(manufactureDate);
  },
  {
    path: ["expirationDate"],
    message: errorMessage.INVALID_DATES,
  }
);

export const lotAddSchema = object({
  medicationName: number().positive(errorMessage.IS_REQUIRED),
  medicationDosage: string().nonempty(errorMessage.IS_REQUIRED),
  medicationForm: number().positive(errorMessage.IS_REQUIRED),
  medicationCategory: number().positive(errorMessage.IS_REQUIRED),
  medicationId: number().positive(errorMessage.IS_REQUIRED),
  codeLot: string().nonempty(errorMessage.IS_REQUIRED),
  manufactureDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  expirationDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  unitPrice: number().positive(errorMessage.IS_REQUIRED),
  publicPrice: number().positive(errorMessage.IS_REQUIRED),
});
