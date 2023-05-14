import { IMedicationElement } from "./IMedication";

export interface ILotElement {
  id: number;
  medication: IMedicationElement;
  codeLot: string;
  manufactureDate: Date;
  expirationDate: Date;
  unitPrice: number;
  publicPrice: number;
}
export interface ILotRequest {
  id?: number;
  medication_id: number;
  codeLot: string;
  manufactureDate: Date;
  expirationDate: Date;
  unitPrice: number;
  publicPrice: number;
}
export interface ItransformedLotData {
  id: number;
  medicationId: number;
  medicationName: string;
  medicationDosage: string;
  medicationForm: string;
  codeLot: string;
  manufactureDate: Date;
  expirationDate: Date;
  unitPrice: number;
  publicPrice: number;
}
