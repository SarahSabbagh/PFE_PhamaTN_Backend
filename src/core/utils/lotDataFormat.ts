import { ILotElement } from "../../redux/api/types/ILot";
const originalData = [
  { dci: "dci1", medication: { name: "med1", dosage: "10mg" }, code: 123 },
  { dci: "dci2", medication: { name: "med2", dosage: "20mg" }, code: 456 },
];

export const transformedLotData = (data: ILotElement[]) =>
  data.map((item) => ({
    id: item.id,
    codeLot: item.codeLot,
    medicationId: item.medication.id,
    medicationName: item.medication.marque,
    medicationDosage: item.medication.dosage,
    medicationForm: item.medication.form,
    expirationDate: item.expirationDate,
    manufactureDate: item.manufactureDate,
    publicPrice: item.publicPrice,
    unitPrice: item.unitPrice,
  }));
