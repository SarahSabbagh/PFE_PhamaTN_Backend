import * as React from "react";
import {
  IAddAction,
  IhandleModal,
} from "../../tableFactory/TableFactory.types";

export interface AddElementProps<FormAddValues extends Record<string, any>> {
  addProps: IAddAction;
  handleModal?: IhandleModal;
  title: string;
}
