import { number, object, string } from "zod";
import i18next from "i18next";
const translate = (key: string): string => i18next.t(key) || "";

export const medicationSchema = object({
  dci_id: number().positive(translate("errorMessages.IS_REQUIRED")),
  marque_id: number().positive(translate("errorMessages.IS_REQUIRED")),
  category_id: number().positive(translate("errorMessages.IS_REQUIRED")),
  form_id: number().positive(translate("errorMessages.IS_REQUIRED")),
  dosage: string().nonempty(translate("errorMessages.IS_REQUIRED")),
  description: string().nonempty(translate("errorMessages.IS_REQUIRED")),
});
export const medicationEditSchema = medicationSchema.extend({
  id: number().positive(translate("errorMessages.IS_REQUIRED")),
});
