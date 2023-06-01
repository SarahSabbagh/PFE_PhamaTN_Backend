import * as React from "react";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";

export interface FormAddProps {
  handleClose?: () => void;
  title: string;
}
export interface FormAddLotProps {
  handleClose?: () => void;
  marques: ISimpleElement[];
  categories: ISimpleElement[];
  forms: ISimpleElement[];
  isLoading: boolean;
}
