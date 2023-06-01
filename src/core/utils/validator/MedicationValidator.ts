import { number, object, string } from "zod";
import { errorMessage } from "../../constants/errorMessages";

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
