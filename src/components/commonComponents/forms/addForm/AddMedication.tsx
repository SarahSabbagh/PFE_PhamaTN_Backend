import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { medicationSchema } from "../../../../core/utils/validator/MedicationValidator";
import { useAddMedicationMutation } from "../../../../redux/api/admin/MedicationApi";
import { defaultValues } from "../../../../models/medication/MedicationInitialValues";
import { IMedicationRequest } from "../../../../redux/api/types/IMedication";
import { toast } from "react-toastify";

export const AddMedication: React.FC<FormAddProps> = (props) => {
  const { t } = useTranslation();
  const { handleClose } = props;
  const { data: dcis = [] } = useDcisQuery();
  const { data: forms = [] } = useFormsQuery();
  const { data: marques = [] } = useMarquesQuery();
  const { data: categories = [] } = useCategoriesQuery();

  const [addMedication] = useAddMedicationMutation();
  const methods = useForm<IMedicationRequest>({
    resolver: zodResolver(medicationSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<IMedicationRequest> = (data) => {
    addMedication(data)
      .unwrap()
      .then(() => {
        handleClose && handleClose();
        toast.success(t("label.SAVED_SUCCESSFULLY"), {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <DialogContent>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <SelectField<ISimpleElement>
                id="dci"
                label={t("cells.DCI")}
                placeholder={t("cells.DCI")}
                name="dci_id"
                options={dcis}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField<ISimpleElement>
                id="dci"
                label={t("cells.BRAND")}
                placeholder={t("cells.BRAND")}
                name="marque_id"
                options={marques}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField<ISimpleElement>
                id="form"
                label={t("cells.FORM")}
                placeholder={t("cells.FORM")}
                name="form_id"
                options={forms}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField<ISimpleElement>
                id="category"
                label={t("cells.CATEGORY")}
                placeholder={t("cells.CATEGORY")}
                name="category_id"
                options={categories}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="dosage"
                placeholder={t("cells.DOSAGE")}
                type="Text"
                label={t("cells.DOSAGE")}
                name="dosage"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="minQuantity"
                placeholder={t("cells.MIN_QUANTITY")}
                type="number"
                label={t("cells.MIN_QUANTITY")}
                name="min_quantity"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                id="description"
                placeholder={t("cells.DESCRIPTION")}
                type="Text"
                label={t("cells.DESCRIPTION")}
                name="description"
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <CancelButton onClick={handleClose}>
                {t("label.CANCEL")}
              </CancelButton>
              <ConfirmButtonStyled type="submit">
                {t("label.ADD")}
              </ConfirmButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
