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
import { SelectField } from "../../InputField/selectInput/SelectField";
import { useDcisQuery } from "../../../../redux/api/dci/dciApi";
import { useFormsQuery } from "../../../../redux/api/admin/FormApi";
import { useMarquesQuery } from "../../../../redux/api/admin/MarqueApi";
import { useCategoriesQuery } from "../../../../redux/api/admin/CategoryApi";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";
import { FormEditProps } from "./EditForm.types";
import { useShowMedicationQuery } from "../../../../redux/api/admin/MedicationApi";

export const EditMedication = <FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<FormEditProps<FormValues>>
) => {
  const { id, handleClose, editAction, item } = props;
  const { data: dcis = [], isLoading: dcisLoading } = useDcisQuery();
  const { data: forms = [], isLoading: formsLoading } = useFormsQuery();
  const { data: marques = [], isLoading: marquesLoading } = useMarquesQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();
  const findId = (list: ISimpleElement[], item: string) => {
    const result = list.find((val) => val.name === item);
    return result?.id;
  };
  const methods = useForm<FormValues>({
    resolver: editAction.editResolver,
    mode: "onChange",
  });
  const {
    handleSubmit,
    formState: { isLoading },
  } = methods;
  const onSubmit = (data: FormValues) => {
    console.log(data);
    editAction?.onSubmitEdit && editAction.onSubmitEdit({ id: id, ...data });
  };
  return (
    <>
      <DialogTitle align="center" variant="h3" color="primary">
        Edit
      </DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            minWidth={500}
        //    minHeight={500}
          >
            {dcisLoading &&
            marquesLoading &&
            formsLoading &&
            categoriesLoading ? (
              <Grid></Grid>
            ) : (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <SelectField<ISimpleElement>
                    id="dci"
                    label="DCI"
                    placeholder="DCI"
                    name="dci_id"
                    options={dcis}
                    defaultValue={findId(marques, item["dci"]) ?? 0}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField<ISimpleElement>
                    id="dci"
                    label="brand"
                    placeholder="brand"
                    name="marque_id"
                    options={marques}
                    defaultValue={findId(marques, item["marque"]) || 0}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField<ISimpleElement>
                    id="form"
                    label="form"
                    placeholder="form"
                    name="form_id"
                    options={forms}
                    defaultValue={findId(forms, item["form"]) || 0}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField<ISimpleElement>
                    id="category"
                    label="category"
                    placeholder="category"
                    name="category_id"
                    options={categories}
                    defaultValue={findId(categories, item["category"]) || 0}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormInput
                    id="dosage"
                    placeholder="dosage"
                    type="Text"
                    label="dosage"
                    name="dosage"
                    defaultValue={item["dosage"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormInput
                    id="description"
                    placeholder="description"
                    type="Text"
                    label="description"
                    name="description"
                    defaultValue={item["description"]}
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <CancelButton onClick={handleClose}>Cancel</CancelButton>
                  <ConfirmButtonStyled
                    onClick={
                      editAction.isSuccessEditForm ? handleClose : undefined
                    }
                    type="submit"
                  >
                    Edit
                  </ConfirmButtonStyled>
                </Grid>
              </Grid>
            )}
          </Box>
        </FormProvider>
      </DialogContent>
    </>
  );
};
