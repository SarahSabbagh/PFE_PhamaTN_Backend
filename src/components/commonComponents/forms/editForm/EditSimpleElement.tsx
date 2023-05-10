import * as React from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { CancelButton } from "../formButton/CancelButton.styles";
import { FormEditProps } from "./EditForm.types";

export const EditSimpleElementForm = <
  FormEditValues extends Record<string, any>
>(
  props: React.PropsWithChildren<FormEditProps<FormEditValues>>
) => {
  const { id, handleClose, itemName, editAction } = props;

  const methods = useForm<FormEditValues>({
    resolver: editAction.editResolver,
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { isLoading },
  } = methods;
  const onSubmit = (data: FormEditValues) => {
    editAction?.onSubmitEdit && editAction.onSubmitEdit({ id: id, ...data });
  };
  return (
    <>
      <DialogTitle align="center" variant="h3" color="primary">
        Edit
      </DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          {editAction.onSubmitEdit && (
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FormInput
                    id="name"
                    placeholder="Name"
                    type="Text"
                    label="Name"
                    name="name"
                    defaultValue={itemName}
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <CancelButton onClick={handleClose}>Cancel</CancelButton>
                  <ConfirmButtonStyled type="submit">
                    {editAction?.isLoadingEditForm ? (
                      <CircularProgress color="inherit" size={16} />
                    ) : (
                      "edit"
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
