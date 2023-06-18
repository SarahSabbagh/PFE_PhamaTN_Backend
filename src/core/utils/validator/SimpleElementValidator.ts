import { object, string } from "zod";

export const simpleElementSchema = object({
  name: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .max(60, "errorMessages.max_60_CHARACTERS"),
});
