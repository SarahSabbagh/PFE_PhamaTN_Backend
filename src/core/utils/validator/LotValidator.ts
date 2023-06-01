import { number, object, string } from "zod";
import dayjs from "dayjs";
import { errorMessage } from "../../constants/errorMessages";

export const lotStepOneSchema = object({
  marque: number().positive(errorMessage.IS_REQUIRED),
  category: number().positive(errorMessage.IS_REQUIRED),
  form: number().positive(errorMessage.IS_REQUIRED),
  dosage: string().nonempty(errorMessage.IS_REQUIRED),
});

export const lotStepTwoSchema = object({
  medicationId: number().positive(errorMessage.IS_REQUIRED),
  codeLot: string().nonempty(errorMessage.IS_REQUIRED),
  manufactureDate: string().refine((value) => dayjs(value).isValid()),
  expirationDate: string().refine((value) => dayjs(value).isValid()),
  unitPrice: number().positive(errorMessage.IS_REQUIRED),
  publicPrice: number().positive(errorMessage.IS_REQUIRED),
})
  .refine(
    (data) => {
      const manufactureDate = dayjs(data.manufactureDate);
      const expirationDate = dayjs(data.expirationDate);
      return expirationDate.isAfter(manufactureDate);
    },
    {
      path: ["expirationDate"],
      message: errorMessage.EXPIRATION_DATE_BEFORE_MANUFACTURE,
    }
  )
  .refine((data) => data.unitPrice < data.publicPrice, {
    path: ["publicPrice"],
    message: errorMessage.PUBLIC_PRICE_less_THAN_UNIT_PRICE,
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
})
  .refine(
    (data) => {
      const manufactureDate = dayjs(data.manufactureDate);
      const expirationDate = dayjs(data.expirationDate);
      return expirationDate.isAfter(manufactureDate);
    },
    {
      path: ["expirationDate"],
      message: errorMessage.EXPIRATION_DATE_BEFORE_MANUFACTURE,
    }
  )
  .refine((data) => data.unitPrice < data.publicPrice, {
    path: ["publicPrice"],
    message: errorMessage.PUBLIC_PRICE_less_THAN_UNIT_PRICE,
  });
