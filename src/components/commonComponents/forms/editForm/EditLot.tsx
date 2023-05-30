import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { FormEditLotProps } from "./EditForm.types";
import { TypeOf } from "zod";
import { useToasts } from "react-toast-notifications";
import { useUpdateLotMutation } from "../../../../redux/api/lot/LotApi";
import { ItransformedLotData } from "../../../../redux/api/types/ILot";
import { CustomDatePicker } from "../../customDatePicker/CustomDatePicker";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { lotSchema } from "../../../../core/utils/validator/LotValidator";
export type ILotEditRequest = TypeOf<typeof lotSchema>;

export const EditLot: React.FC<FormEditLotProps> = (props) => {
  const { t } = useTranslation();
  const { handleClose, defaultValues, id } = props;
  const { addToast } = useToasts();
  const methods = useForm<ItransformedLotData>({
    resolver: zodResolver(lotSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });
  const { handleSubmit, setError } = methods;
  const [updateLot] = useUpdateLotMutation();
  const onSubmit: SubmitHandler<ItransformedLotData> = async (data) => {
    const {
      id,
      publicPrice,
      manufactureDate,
      expirationDate,
      unitPrice,
      codeLot,
      medicationId,
    } = data;
    updateLot({
      id: id,
      publicPrice: publicPrice,
      unitPrice: unitPrice,
      manufactureDate: dayjs(manufactureDate),
      expirationDate: dayjs(expirationDate),
      codeLot: codeLot,
      medication_id: medicationId,
    })
      .unwrap()
      .then(() => {
        handleClose();
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-lot",
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
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="codeLot"
                placeholder={t("cells.LOT_NUMBER")}
                type="text"
                label={t("cells.LOT_NUMBER")}
                name="codeLot"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="medicationName"
                placeholder={t("cells.MEDICATION")}
                type="text"
                label={t("cells.MEDICATION")}
                name="medicationName"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="Form"
                placeholder={t("cells.FORM")}
                type="text"
                label={t("cells.FORM")}
                name="medicationForm"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="Dosage"
                placeholder={t("cells.DOSAGE")}
                type="text"
                label={t("cells.DOSAGE")}
                name="medicationDosage"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="unitPrice"
                placeholder={t("cells.UNIT_PRICE")}
                type="number"
                label={t("cells.UNIT_PRICE")}
                name="unitPrice"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="publicPrice"
                placeholder={t("cells.PUBLIC_PRICE")}
                type="number"
                label={t("cells.PUBLIC_PRICE")}
                name="publicPrice"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker
                disableFuture
                id="manufactureDate"
                label={t("cells.MANUFACTURE_DATE")}
                name="manufactureDate"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker
                id="expirationDate"
                label={t("cells.EXPIRATION_DATE")}
                name="expirationDate"
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
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
