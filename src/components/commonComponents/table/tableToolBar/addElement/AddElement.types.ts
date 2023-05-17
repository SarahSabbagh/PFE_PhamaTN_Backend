import * as React from "react";
import {
  IAddAction,
  IhandleModal,
} from "../../tableFactory/TableFactory.types";

export interface AddElementProps<FormAddValues extends Record<string, any>> {
  addProps: IAddAction<FormAddValues>;
  handleModal?: IhandleModal;
  title: string;
}
