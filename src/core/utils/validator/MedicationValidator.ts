import { number, object, string } from "zod";

export const medicationSchema = object({
  dci_id: number().positive("errorMessages.IS_REQUIRED"),
  marque_id: number().positive("errorMessages.IS_REQUIRED"),
  category_id: number().positive("errorMessages.IS_REQUIRED"),
  form_id: number().positive("errorMessages.IS_REQUIRED"),
  dosage: string().nonempty("errorMessages.IS_REQUIRED"),
  description: string().nonempty("errorMessages.IS_REQUIRED"),
  min_quantity: number().positive("errorMessages.IS_REQUIRED"),
});
export const medicationEditSchema = medicationSchema.extend({
  id: number().positive("errorMessages.IS_REQUIRED"),
});
