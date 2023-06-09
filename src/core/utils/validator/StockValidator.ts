import { number, object, string } from "zod";

export const addLotToStockSchema = object({
  userId: number().positive("errorMessages.IS_REQUIRED"),
  codeLot: string().nonempty("errorMessages.IS_REQUIRED"),
  quantity: number().positive("errorMessages.IS_REQUIRED"),
});
