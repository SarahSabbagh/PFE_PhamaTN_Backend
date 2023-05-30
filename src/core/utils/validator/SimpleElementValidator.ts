import { object, string } from "zod";
import i18next from "i18next";
const translate = (key: string): string => i18next.t(key) || "";

export const simpleElementSchema = object({
  name: string()
    .nonempty(translate("errorMessages.IS_REQUIRED"))
    .max(60, translate("errorMessages.max_60_CHARACTERS")),
});
