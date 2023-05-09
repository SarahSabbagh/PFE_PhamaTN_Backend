import * as React from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { FormAddProps } from "./AddForm.types";

export const AddForm = <FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<FormAddProps<FormValues>>
) => {
  const {
    titleAddForm,
    defaultAddValues,
    addResolver,
    onSubmitAdd,
    handleClose,
    isLoadingAddForm,
    isSuccessAddForm,
  } = props;
  const methods = useForm<FormValues>({
    resolver: addResolver,
    defaultValues: defaultAddValues,

    mode: "onChange",
  });
  const { handleSubmit } = methods;

  return (
    <>
      <DialogTitle align="center" variant="h3" color="primary">
        {titleAddForm}
      </DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          {onSubmitAdd && (
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmitAdd)}
              noValidate
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormInput
                    id="name"
                    placeholder="Name"
                    type="Text"
                    label="Name"
                    name="name"
                    required
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <CancelButton onClick={handleClose}>Cancel</CancelButton>
                  <ConfirmButtonStyled
                    onClick={isSuccessAddForm ? handleClose : undefined}
                    type="submit"
                  >
                    {isLoadingAddForm ? (
                      <CircularProgress color="inherit" size={16} />
                    ) : (
                      "Add"
                    )}
                  </ConfirmButtonStyled>
                </Grid>
              </Grid>
            </Box>
          )}
        </FormProvider>
      </DialogContent>
    </>
  );
};
