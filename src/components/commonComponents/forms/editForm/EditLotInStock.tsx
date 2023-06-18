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
    defaultValues: {
      codeLot: defaultValues.codeLot,
      quantity: defaultValues.quantity,
      userId: userId,
    },
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
          <Grid item xs={12}>
            <FormInput
              id="quantity"
              label={t("cells.QUANTITY")}
              placeholder={t("cells.QUANTITY")}
              name="quantity"
              type="number"
            />
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
