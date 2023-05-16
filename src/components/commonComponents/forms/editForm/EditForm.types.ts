import * as React from "react";
import {
  IMedicationElement,
  IMedicationRequest,
} from "../../../../redux/api/types/IMedication";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";
import { ItransformedLotData } from "../../../../redux/api/types/ILot";

export interface FormEditSimpleElementProps {
  id: number;
  item: ISimpleElement;
  title: string;
  handleClose: () => void;
}
export interface FormEditMedicationProps {
  id: number;
  isLoading: boolean;
  item: IMedicationElement;
  marques: ISimpleElement[];
  dcis: ISimpleElement[];
  categories: ISimpleElement[];
  forms: ISimpleElement[];
  handleClose: () => void;
}
export interface FormEditLotProps {
  id: number;
  defaultValues: ItransformedLotData;
  handleClose: () => void;
}
