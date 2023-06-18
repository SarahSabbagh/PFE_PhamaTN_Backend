import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { SelectField } from "../../InputField/selectInput/SelectField";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";
import { FormEditMedicationProps } from "./EditForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateMedicationMutation } from "../../../../redux/api/admin/MedicationApi";
import { useToasts } from "react-toast-notifications";
import { Loader } from "../../loader/Loader";
import { IMedicationRequest } from "../../../../redux/api/types/IMedication";
import { medicationEditSchema } from "../../../../core/utils/validator/MedicationValidator";

export const EditMedication: React.FC<FormEditMedicationProps> = (props) => {
  const { id, handleClose, item, isLoading, dcis, forms, categories, marques } =
    props;
  const { t } = useTranslation();
  const { addToast } = useToasts();
  const findId = (list: ISimpleElement[], item: string) => {
    const result = list.find((val) => val.name === item);
    return result ? result?.id : 0;
  };

  const methods = useForm<IMedicationRequest>({
    resolver: zodResolver(medicationEditSchema),
    defaultValues: {
      id: id,
      dci_id: findId(dcis, item.dci),
      marque_id: findId(marques, item.marque),
      category_id: findId(categories, item.category),
      form_id: findId(forms, item.form),
      dosage: item.dosage,
      description: item.description,
      min_quantity: item.min_quantity,
    },
    mode: "onChange",
  });
  const { handleSubmit, setError } = methods;

  const [updateMedication] = useUpdateMedicationMutation();

  const onSubmit: SubmitHandler<IMedicationRequest> = async (data) => {
    const { id, ...rest } = data;
    updateMedication({ id: id, ...rest })
      .unwrap()
      .then(() => {
        handleClose();
        addToast(t("label.SAVED_SUCCESSFULLY"), {
          appearance: "success",
          key: "edit-medication",
        });
      })
      .catch((error: any) => {
        for (const key of Object.keys(data)) {
          if (error.data.errors[key]) {
            setError(key as keyof typeof data, {
              type: "server",
              message: error.data.errors[key][0],
            });
          }
        }
      });
  };
  return (
    <DialogContent>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {isLoading ? (
            <Loader />
          ) : (
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
                  id="marque"
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormInput
                  id="minQuantity"
                  placeholder={t("cells.MIN_QUANTITY")}
                  type="number"
                  label={t("cells.MIN_QUANTITY")}
                  name="min_quantity"
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
                  {t("label.EDIT")}
                </ConfirmButtonStyled>
              </Grid>
            </Grid>
          )}
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
