import * as React from "react";
import { DeepPartial, Resolver, SubmitHandler } from "react-hook-form";

export interface FormAddProps<FormValues extends Record<string, any>> {
  handleClose?: () => void;
  titleAddForm?: string;
  defaultAddValues?: DeepPartial<FormValues>;
  addResolver?: Resolver<FormValues>;
  onSubmitAdd?: SubmitHandler<FormValues>;
  isLoadingAddForm?: boolean;  isSuccessAddForm?: boolean;
}
