import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../../../InputField/formInput/FormInput";
import { TypeOf } from "zod";
import { lotStepTwoSchema } from "../../../../../../core/utils/validator/LotValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddLotStepTwoProps } from "./AddLotStepTwo.types";
import { CustomDatePicker } from "../../../../customDatePicker/CustomDatePicker";
import { useAddLotMutation } from "../../../../../../redux/api/lot/LotApi";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

type lotStepTwo = TypeOf<typeof lotStepTwoSchema>;
export const AddLotStepTwo: React.FC<AddLotStepTwoProps> = (props) => {
  const { handleBack, medicationId, handleClose, handleError } = props;
  const { t } = useTranslation();
  const [addLot] = useAddLotMutation();
  const methods = useForm<lotStepTwo>({
    resolver: zodResolver(lotStepTwoSchema),
    defaultValues: {
      medicationId: medicationId,
      codeLot: "",
    },
    mode: "onChange",
  });

  const { handleSubmit, setError } = methods;

  const onSubmit: SubmitHandler<lotStepTwo> = (data) => {
    const {
      publicPrice,
      manufactureDate,
      expirationDate,
      unitPrice,
      codeLot,
      medicationId,
    } = data;
    addLot({
      publicPrice: publicPrice,
      unitPrice: unitPrice,
      manufactureDate: dayjs(manufactureDate),
      expirationDate: dayjs(expirationDate),
      codeLot: codeLot,
      medication_id: medicationId,
    })
      .unwrap()
      .then(() => {
        //handleError(false);
        handleClose && handleClose();
      })
      .catch((error: any) => {
        handleError(true);
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
          <Grid item xs={12} sm={6}>
            <FormInput
              id="unitPrice"
              placeholder={t("cells.UNIT_PRICE")}
              type="number"
              label={t("cells.UNIT_PRICE")}
              name="unitPrice"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              id="publicPrice"
              placeholder={t("cells.PUBLIC_PRICE")}
              type="number"
              label={t("cells.PUBLIC_PRICE")}
              name="publicPrice"
              required
            />
          </Grid>
          <Grid>
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              {t("label.BACK")}
            </Button>
            <Button type="submit">{t("label.FINISH")}</Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};
