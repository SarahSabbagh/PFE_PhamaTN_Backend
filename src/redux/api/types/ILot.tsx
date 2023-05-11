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
  medication_id: number;
  codeLot: string;
  manufactureDate: Date;
  expirationDate: Date;
  unitPrice: number;
  publicPrice: number;
}
