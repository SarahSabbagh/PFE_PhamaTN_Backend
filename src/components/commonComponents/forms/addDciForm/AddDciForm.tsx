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
import { useAddDciMutation } from "../../../../redux/api/dci/dciApi";
import { FormInput } from "../../InputField/formInput/FormInput";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { CancelButton } from "../formButton/CancelButton.styles";
import { FormAddProps } from "./AddDciForm.types";

export const AddDciForm: React.FC<FormAddProps> = ({ handleClose }) => {
  const [addDci, { isLoading }] = useAddDciMutation();

  const methods = useForm<{ name: string }>({
    //resolver: zodResolver(signUpSchema),
    defaultValues: { name: "" },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const submitHandler: SubmitHandler<{ name: string }> = (data) => {
    console.log(data.name);
    addDci(data.name).unwrap();
  };

  return (
    <>
      <DialogTitle align="center" variant="h3" color="primary">
        Add DCI
      </DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <FormInput
                  id="name"
                  placeholder="Name"
                  type="Text"
                  label="Name"
                  name="name"
                  required
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
                <CancelButton onClick={handleClose}>Cancel</CancelButton>
                <ConfirmButtonStyled onClick={handleClose} type="submit">
                  {isLoading ? (
                    <CircularProgress color="inherit" size={16} />
                  ) : (
                    "Add"
                  )}
                </ConfirmButtonStyled>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </DialogContent>
    </>
  );
};
