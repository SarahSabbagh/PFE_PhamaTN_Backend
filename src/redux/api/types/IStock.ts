import { Dayjs } from "dayjs";
import { IMedicationElement } from "./IMedication";

export interface IStockElement {
  id: number;
  codeLot: string;
  manufactureDate: Dayjs;
  expirationDate: Dayjs;
  unitPrice: number;
  publicPrice: number;
  pivot: { user_id: number; lot_id: number; quantity_lot: number };
}
export interface IStock {
  medication: IMedicationElement;
  quantity: number;
  lots: IStockElement[];
}
export interface IStockElementRequest {
  codeLot: string;
  userId: number;
  quantity: number;
}
export interface ItransformedStockElementData {
  medicationId: number;
  medicationName: string;
  medicationDosage: string;
  medicationForm: string;
  medicationCategory: string;
  lots: IStockElement[];
  quantity: number;
  minQuantity: number;
}
export interface ItransformedElementData {
  id: number;
  codeLot: string;
  manufactureDate: Dayjs | string;
  expirationDate: Dayjs | string;
  unitPrice: number;
  publicPrice: number;
  quantity: number;
}
