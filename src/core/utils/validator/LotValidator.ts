import { number, object, string } from "zod";
import dayjs from "dayjs";

export const lotStepOneSchema = object({
  marque: number().positive("errorMessages.IS_REQUIRED"),
  category: number().positive("errorMessages.IS_REQUIRED"),
  form: number().positive("errorMessages.IS_REQUIRED"),
  dosage: string().nonempty("errorMessages.IS_REQUIRED"),
});

export const lotStepTwoSchema = object({
  medicationId: number().positive("errorMessages.IS_REQUIRED"),
  codeLot: string().nonempty("errorMessages.IS_REQUIRED"),
  manufactureDate: string().refine((value) => dayjs(value).isValid()),
  expirationDate: string().refine((value) => dayjs(value).isValid()),
  unitPrice: number().positive("errorMessages.IS_REQUIRED"),
  publicPrice: number().positive("errorMessages.IS_REQUIRED"),
})
  .refine(
    (data) => {
      const manufactureDate = dayjs(data.manufactureDate);
      const expirationDate = dayjs(data.expirationDate);
      return expirationDate.isAfter(manufactureDate);
    },
    {
      path: ["expirationDate"],
      message: "errorMessages.EXPIRATION_DATE_BEFORE_MANUFACTURE",
    }
  )
  .refine((data) => data.unitPrice < data.publicPrice, {
    path: ["publicPrice"],
    message: "errorMessages.PUBLIC_PRICE_less_THAN_UNIT_PRICE",
  });

export const lotSchema = object({
  id: number(),
  medicationName: string().nonempty("errorMessages.IS_REQUIRED"),
  medicationDosage: string().nonempty("errorMessages.IS_REQUIRED"),
  medicationForm: string().nonempty("errorMessages.IS_REQUIRED"),
  medicationCategory: string().nonempty("errorMessages.IS_REQUIRED"),
  medicationId: number().positive("errorMessages.IS_REQUIRED"),
  codeLot: string().nonempty("errorMessages.IS_REQUIRED"),
  manufactureDate: string().refine((value) => dayjs(value).isValid()),
  expirationDate: string().refine((value) => dayjs(value).isValid()),
  unitPrice: number().positive("errorMessages.IS_REQUIRED"),
  publicPrice: number().positive("errorMessages.IS_REQUIRED"),
})
  .refine(
    (data) => {
      const manufactureDate = dayjs(data.manufactureDate);
      const expirationDate = dayjs(data.expirationDate);
      return expirationDate.isAfter(manufactureDate);
    },
    {
      path: ["expirationDate"],
      message: "errorMessages.EXPIRATION_DATE_BEFORE_MANUFACTURE",
    }
  )
  .refine((data) => data.unitPrice < data.publicPrice, {
    path: ["publicPrice"],
    message: "errorMessages.PUBLIC_PRICE_less_THAN_UNIT_PRICE",
  });
