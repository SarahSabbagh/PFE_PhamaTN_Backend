import { IStock, IStockElement } from "../../redux/api/types/IStock";
import { DateFormatISO } from "./DateFormat";

export const transformedStockData = (data: IStock[]) =>
  data.map((item) => ({
    medicationId: item.medication.id,
    medicationName: item.medication.marque,
    medicationDosage: item.medication.dosage,
    medicationForm: item.medication.form,
    medicationCategory: item.medication.category,
    lots: item.lots,
    quantity: item.quantity,
    minQuantity: item.medication.min_quantity,
  }));
export const transformedStockItemData = (data: IStockElement[]) =>
  data?.map((item) => ({
    id: item.id,
    codeLot: item.codeLot,
    expirationDate: DateFormatISO(item.expirationDate),
    manufactureDate: DateFormatISO(item.manufactureDate),
    publicPrice: item.publicPrice,
    unitPrice: item.unitPrice,
    quantity: item.pivot.quantity_lot,
  }));
