import * as React from "react";
import { IMedicationElement } from "../../../../redux/api/types/IMedication";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";

export interface FormEditSimpleElementProps {
  id: number;
  item: ISimpleElement;
  title: string;
  handleClose: () => void;
}
export interface FormEditMedicationProps {
  id: number;
  item: IMedicationElement;
  handleClose: () => void;
}
