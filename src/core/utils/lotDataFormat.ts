import { ILotElement } from "../../redux/api/types/ILot";

export const transformedLotData = (data: ILotElement[]) =>
  data.map((item) => ({
    id: item.id,
    codeLot: item.codeLot,
    medicationId: item.medication.id,
    medicationName: item.medication.marque,
    medicationDosage: item.medication.dosage,
    medicationForm: item.medication.form,
    medicationCategory: item.medication.category,
    expirationDate: item.expirationDate,
    manufactureDate: item.manufactureDate,
    publicPrice: item.publicPrice,
    unitPrice: item.unitPrice,
  }));
