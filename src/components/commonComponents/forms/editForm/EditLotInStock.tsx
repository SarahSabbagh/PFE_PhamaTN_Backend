import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Divider, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { FormEditLotInStockProps } from "./EditForm.types";
import { useToasts } from "react-toast-notifications";
import { zodResolver } from "@hookform/resolvers/zod";
import { IStockElementRequest } from "../../../../redux/api/types/IStock";
import { useUpdateLotQuantityMutation } from "../../../../redux/api/stock/stockApi";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { addLotToStockSchema } from "../../../../core/utils/validator/StockValidator";

export const EditLotInStock: React.FC<FormEditLotInStockProps> = (props) => {
  const { t } = useTranslation();
  const { handleClose, defaultValues } = props;

  const { addToast } = useToasts();
  const { userId } = useCurrentUser();

  const methods = useForm<IStockElementRequest>({
    resolver: zodResolver(addLotToStockSchema),
    defaultValues: { ...defaultValues, userId: userId },
    mode: "onChange",
  });
  const { handleSubmit, setError } = methods;
  const [updateLotQuantity] = useUpdateLotQuantityMutation();
  const onSubmit: SubmitHandler<IStockElementRequest> = async (data) => {
    updateLotQuantity(data)
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
            <Grid item xs={12}>
              <FormInput
                id="quantity"
                label={t("cells.QUANTITY")}
                placeholder={t("cells.QUANTITY")}
                name="quantity"
                type="number"
              />
              <Divider sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="codeLot"
                placeholder={t("cells.LOT_NUMBER")}
                type="text"
                label={t("cells.LOT_NUMBER")}
                name="codeLot"
                readOnly
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
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="publicPrice"
                placeholder={t("cells.PUBLIC_PRICE")}
                type="number"
                label={t("cells.PUBLIC_PRICE")}
                name="publicPrice"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="manufactureDate"
                label={t("cells.MANUFACTURE_DATE")}
                placeholder={t("cells.MANUFACTURE_DATE")}
                name="manufactureDate"
                type="text"
                readOnly
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput
                id="expirationDate"
                label={t("cells.EXPIRATION_DATE")}
                name="expirationDate"
                placeholder={t("cells.EXPIRATION_DATE")}
                type="text"
                readOnly
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
