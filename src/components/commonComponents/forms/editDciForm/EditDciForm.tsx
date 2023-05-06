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
import {
  useShowDciQuery,
  useUpdateDciMutation,
} from "../../../../redux/api/dci/dciApi";
import { FormInput } from "../../InputField/formInput/FormInput";
import { FormEditProps } from "./EditDciForm.types";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { CancelButton } from "../formButton/CancelButton.styles";
import { useToasts } from "react-toast-notifications";

export const EditDciForm: React.FC<FormEditProps> = ({ id, handleClose }) => {
  const { addToast, removeToast } = useToasts();
  const { data, isLoading } = useShowDciQuery(id);
  const [updateDci] = useUpdateDciMutation();
  const methods = useForm<{ name: string }>({
    //resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const submitHandler: SubmitHandler<{ name: string }> = async (data) => {
    updateDci({ id, name: data.name })
      .unwrap()
      .then(() => {
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-dci",
        });
      });
  };

  React.useEffect(() => {
    return () => {
      setTimeout(() => {
        removeToast("edit-dci");
      }, 1000);
    };
  }, []);
  return (
    <>
      <DialogTitle align="center" variant="h3" color="primary">
        Edit DCI
      </DialogTitle>
      <DialogContent>
        {isLoading ? (
          <CircularProgress color="inherit" />
        ) : (
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
                    defaultValue={data?.data?.name}
                    required
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <CancelButton onClick={handleClose}>Cancel</CancelButton>
                  <ConfirmButtonStyled onClick={handleClose} type="submit">
                    {isLoading ? (
                      <CircularProgress color="inherit" size={16} />
                    ) : (
                      "edit"
                    )}
                  </ConfirmButtonStyled>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        )}
      </DialogContent>
    </>
  );
};
