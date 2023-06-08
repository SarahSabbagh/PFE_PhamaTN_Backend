import * as React from "react";
import { Box, Button, DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { addLotToStockSchema } from "../../../../../core/utils/validator/StockValidator";
import { useAddLotToStockMutation } from "../../../../../redux/api/stock/stockApi";
import { useCurrentUser } from "../../../../../hooks/useCurrentUser";
import { AddLotToStockProps } from "./AddLotToStock.types";
import { FormInput } from "../../../InputField/formInput/FormInput";
import { CancelButton } from "../../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../../formButton/ConfirmButton.styles";

type lotStepOne = TypeOf<typeof addLotToStockSchema>;

export const AddLotToStock: React.FC<AddLotToStockProps> = (props) => {
  const { handleClose } = props;
  const { t } = useTranslation();
  const [addLotToStock] = useAddLotToStockMutation();
  const { userId } = useCurrentUser();
  const methods = useForm<lotStepOne>({
    resolver: zodResolver(addLotToStockSchema),
    defaultValues: {
      userId: userId,
      codeLot: "",
    },
    mode: "onChange",
  });

  const { handleSubmit, setError } = methods;
  const onSubmit: SubmitHandler<lotStepOne> = (data) => {
    addLotToStock(data)
      .unwrap()
      .then(() => {
        handleClose && handleClose();
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormInput
                id="codeLot"
                placeholder={t("cells.LOT_NUMBER")}
                type="text"
                label={t("cells.LOT_NUMBER")}
                name="codeLot"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                id="quantity"
                placeholder={t("cells.QUANTITY")}
                type="number"
                label={t("cells.QUANTITY")}
                name="quantity"
                required
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
