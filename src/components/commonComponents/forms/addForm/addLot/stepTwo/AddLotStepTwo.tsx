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

type lotStepTwo = TypeOf<typeof lotStepTwoSchema>;
export const AddLotStepTwo: React.FC<AddLotStepTwoProps> = (props) => {
  const { handleBack, medicationId, handleClose } = props;
  const [addLot] = useAddLotMutation();
  const methods = useForm<lotStepTwo>({
    resolver: zodResolver(lotStepTwoSchema),
    defaultValues: {
      medicationId: medicationId,
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;

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
      publicPrice: parseFloat(publicPrice),
      unitPrice: parseFloat(unitPrice),
      manufactureDate: dayjs(manufactureDate),
      expirationDate: dayjs(expirationDate),
      codeLot: codeLot,
      medication_id: medicationId,
    }).unwrap();
    //       .then(() => {
    //         handleClose();
    //       });
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormInput
              id="codeLot"
              placeholder="Code Lot"
              type="text"
              label="Code Lot"
              name="codeLot"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomDatePicker
              disableFuture
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
          <Grid item xs={12} sm={6}>
            <FormInput
              id="unitPrice"
              placeholder="dosage"
              type="number"
              label="Unit Price"
              name="unitPrice"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              id="publicPrice"
              placeholder="Public Price"
              type="number"
              label="Public Price"
              name="publicPrice"
              required
            />
          </Grid>
          <Grid>
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button onClick={handleClose} type="submit">
              Finish
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};
