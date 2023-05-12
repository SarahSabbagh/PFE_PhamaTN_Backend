import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, DialogTitle, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { FormAddProps } from "./AddForm.types";
import { SelectField } from "../../InputField/selectInput/SelectField";
import { useDcisQuery } from "../../../../redux/api/dci/dciApi";
import { useFormsQuery } from "../../../../redux/api/admin/FormApi";
import { useMarquesQuery } from "../../../../redux/api/admin/MarqueApi";
import { useCategoriesQuery } from "../../../../redux/api/admin/CategoryApi";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";

export const AddMedication = <FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<FormAddProps<FormValues>>
) => {
  const {
    addResolver,
    onSubmitAdd,
    handleClose,
    defaultAddValues,
    isSuccessAddForm,
  } = props;
  const { data: dcis = [] } = useDcisQuery();
  const { data: forms = [] } = useFormsQuery();
  const { data: marques = [] } = useMarquesQuery();
  const { data: categories = [] } = useCategoriesQuery();

  const methods = useForm<FormValues>({
    resolver: addResolver,
    defaultValues: defaultAddValues,
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  return (
    <DialogContent>
      <FormProvider {...methods}>
        {onSubmitAdd && (
          <Box component="form" onSubmit={handleSubmit(onSubmitAdd)} noValidate>
            <Grid container spacing={1} minWidth={300} maxWidth={600}>
              <Grid item xs={12} sm={6}>
                <SelectField<ISimpleElement>
                  id="dci"
                  label="DCI"
                  placeholder="DCI"
                  name="dci_id"
                  options={dcis}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectField<ISimpleElement>
                  id="dci"
                  label="brand"
                  placeholder="brand"
                  name="marque_id"
                  options={marques}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectField<ISimpleElement>
                  id="form"
                  label="form"
                  placeholder="form"
                  name="form_id"
                  options={forms}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectField<ISimpleElement>
                  id="category"
                  label="category"
                  placeholder="category"
                  name="category_id"
                  options={categories}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  id="dosage"
                  placeholder="dosage"
                  type="Text"
                  label="dosage"
                  name="dosage"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  id="description"
                  placeholder="description"
                  type="Text"
                  label="description"
                  name="description"
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <CancelButton onClick={handleClose}>Cancel</CancelButton>
                <ConfirmButtonStyled
                  onClick={isSuccessAddForm ? handleClose : undefined}
                  type="submit"
                >
                  Add
                </ConfirmButtonStyled>
              </Grid>
            </Grid>
          </Box>
        )}
      </FormProvider>
    </DialogContent>
  );
};
