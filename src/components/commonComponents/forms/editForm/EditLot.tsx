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
import { lotSchema } from "../../../../core/utils/validator";
import { useToasts } from "react-toast-notifications";
import { useUpdateLotMutation } from "../../../../redux/api/lot/LotApi";
import { ItransformedLotData } from "../../../../redux/api/types/ILot";
import { CustomDatePicker } from "../../customDatePicker/CustomDatePicker";
import dayjs from "dayjs";
export type ILotEditRequest = TypeOf<typeof lotSchema>;

export const EditLot: React.FC<FormEditLotProps> = (props) => {
  const { handleClose, defaultValues, id } = props;
  const { addToast } = useToasts();
  const methods = useForm<ItransformedLotData>({
    //  resolver: zodResolver(medicationEditSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });
  const { handleSubmit } = methods;
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
      manufactureDate: manufactureDate,
      expirationDate: expirationDate,
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
                placeholder="CodeLot"
                type="Text"
                label="Code lot"
                name="codeLot"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="medicationName"
                placeholder="Medication"
                type="Text"
                label="Medication"
                name="medicationName"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="Form"
                placeholder="Form"
                type="Text"
                label="Form"
                name="medicationForm"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="Dosage"
                placeholder="Dosage"
                type="Text"
                label="Dosage"
                name="medicationDosage"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="unitPrice"
                placeholder="Init Price"
                type="Text"
                label="Unit price"
                name="unitPrice"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="publicPrice"
                placeholder="Public Price"
                type="Text"
                label="Public price"
                name="publicPrice"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker
                id="manufactureDate"
                label="Manufacture date"
                name="manufactureDate"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomDatePicker
                id="expirationDate"
                label="Expiration date"
                name="expirationDate"
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
              <ConfirmButtonStyled type="submit">Edit</ConfirmButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
