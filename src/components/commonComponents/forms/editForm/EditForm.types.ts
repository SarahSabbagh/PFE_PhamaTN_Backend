import * as React from "react";
import {
  IMedicationElement,
  IMedicationRequest,
} from "../../../../redux/api/types/IMedication";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";

export interface FormEditSimpleElementProps {
  id: number;
  item: ISimpleElement;
  title: string;
  handleClose: () => void;
}
export interface FormEditMedicationProps {
  id: number;
  isLoading: boolean;
  defaultValues: IMedicationRequest;
  marques: ISimpleElement[];
  dcis: ISimpleElement[];
  categories: ISimpleElement[];
  forms: ISimpleElement[];
  handleClose: () => void;
}
