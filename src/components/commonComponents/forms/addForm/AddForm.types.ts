import * as React from "react";
import { DeepPartial, Resolver, SubmitHandler } from "react-hook-form";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";

export interface FormAddProps<FormValues extends Record<string, any>> {
  handleClose?: () => void;
  defaultAddValues?: DeepPartial<FormValues>;
  addResolver?: Resolver<FormValues>;
  onSubmitAdd: SubmitHandler<FormValues>;
  isLoadingAddForm?: boolean;
  isSuccessAddForm?: boolean;
}
export interface FormAddLotProps<FormValues extends Record<string, any>> {
  handleClose?: () => void;
  defaultAddValues?: DeepPartial<FormValues>;
  addResolver?: Resolver<FormValues>;
  onSubmitAdd: SubmitHandler<FormValues>;
  isLoadingAddForm?: boolean;
  isSuccessAddForm?: boolean;
  marques: ISimpleElement[];
  dcis: ISimpleElement[];
  categories: ISimpleElement[];
  forms: ISimpleElement[];
  isLoading: boolean;
}
