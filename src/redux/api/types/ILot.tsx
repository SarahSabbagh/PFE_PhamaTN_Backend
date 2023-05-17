import { Dayjs } from "dayjs";
import { IMedicationElement } from "./IMedication";

export interface ILotElement {
  id: number;
  medication: IMedicationElement;
  codeLot: string;
  manufactureDate: Dayjs;
  expirationDate: Dayjs;
  unitPrice: number;
  publicPrice: number;
}
export interface ILotRequest {
  id?: number;
  medication_id: number;
  codeLot: string;
  manufactureDate: Dayjs;
  expirationDate: Dayjs;
  unitPrice: number;
  publicPrice: number;
}
export interface ItransformedLotData {
  id: number;
  medicationId: number;
  medicationName: string;
  medicationDosage: string;
  medicationForm: string;
  medicationCategory: string;
  codeLot: string;
  manufactureDate: string | Dayjs;
  expirationDate: string | Dayjs;
  unitPrice: number;
  publicPrice: number;
}
