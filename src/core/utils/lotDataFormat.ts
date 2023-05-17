import { ILotElement } from "../../redux/api/types/ILot";
import { DateFormatISO } from "./DateFormat";

export const transformedLotData = (data: ILotElement[]) =>
  data.map((item) => ({
    id: item.id,
    codeLot: item.codeLot,
    medicationId: item.medication.id,
    medicationName: item.medication.marque,
    medicationDosage: item.medication.dosage,
    medicationForm: item.medication.form,
    medicationCategory: item.medication.category,
    expirationDate: DateFormatISO(item.expirationDate),
    manufactureDate: DateFormatISO(item.manufactureDate),
    publicPrice: item.publicPrice,
    unitPrice: item.unitPrice,
  }));
