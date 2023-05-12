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
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { SelectField } from "../../InputField/selectInput/SelectField";
import { useDcisQuery } from "../../../../redux/api/dci/dciApi";
import { useFormsQuery } from "../../../../redux/api/admin/FormApi";
import { useMarquesQuery } from "../../../../redux/api/admin/MarqueApi";
import { useCategoriesQuery } from "../../../../redux/api/admin/CategoryApi";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";
import { FormEditMedicationProps } from "./EditForm.types";
import { TypeOf } from "zod";
import { medicationEditSchema } from "../../../../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateMedicationMutation } from "../../../../redux/api/admin/MedicationApi";
import { useToasts } from "react-toast-notifications";

export type IMedicationEditRequest = TypeOf<typeof medicationEditSchema>;

export const EditMedication: React.FC<FormEditMedicationProps> = (props) => {
  const { id, handleClose, item } = props;
  const {
    data: dcis = [],
    isLoading: dcisLoading,
    isSuccess: dcisSuccess,
  } = useDcisQuery();
  const {
    data: forms = [],
    isLoading: formsLoading,
    isSuccess: formsSuccess,
  } = useFormsQuery();
  const {
    data: marques = [],
    isLoading: marquesLoading,
    isSuccess: marquesSuccess,
  } = useMarquesQuery();
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isSuccess: categoriesSuccess,
  } = useCategoriesQuery();

  const findId = (list: ISimpleElement[], item: string) => {
    const result = list.find((val) => val.name === item);
    return result ? result?.id : 0;
  };
  const { addToast } = useToasts();

  const methods = useForm<IMedicationEditRequest>({
    resolver: zodResolver(medicationEditSchema),
    defaultValues: {
      id: id,
      dci_id: findId(marques, item["marque"]),
      marque_id: findId(marques, item["marque"]),
      category_id: findId(marques, item["marque"]),
      form_id: findId(marques, item["marque"]),
      dosage: item.dosage,
      description: item.description,
    },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const [updateMedication, { isLoading, isSuccess }] =
    useUpdateMedicationMutation();

  const onSubmit: SubmitHandler<IMedicationEditRequest> = async (data) => {
    const { id, ...rest } = data;
    updateMedication({ id: id, ...rest })
      .unwrap()
      .then(() => {
        handleClose();
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-medication",
        });
      });
  };
  return (
    <DialogContent>
      <FormProvider {...methods}>
        {categoriesSuccess && formsSuccess && dcisSuccess && marquesSuccess && (
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            minWidth={500}
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
                  <ConfirmButtonStyled type="submit">Edit</ConfirmButtonStyled>
                </Grid>
              </Grid>
            )}
          </Box>
        )}
      </FormProvider>
    </DialogContent>
  );
};
