import { number, object, string } from "zod";
import i18next from "i18next";
import dayjs from "dayjs";
const translate = (key: string): string => i18next.t(key) || "";

export const addLotToStockSchema = object({
  userId: number().positive(translate("errorMessages.IS_REQUIRED")),
  codeLot: string().nonempty(translate("errorMessages.IS_REQUIRED")),
  quantity: number().positive(translate("errorMessages.IS_REQUIRED")),
});
