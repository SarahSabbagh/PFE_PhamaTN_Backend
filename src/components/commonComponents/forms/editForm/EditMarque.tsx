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

import { FormInput } from "../../InputField/formInput/FormInput";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { CancelButton } from "../formButton/CancelButton.styles";
import { useToasts } from "react-toast-notifications";
import { dciSchema } from "../../../../core/utils/validator";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEditProps } from "./EditForm.types";
import {
  useShowMarqueQuery,
  useUpdateMarqueMutation,
} from "../../../../redux/api/admin/MarqueApi";

type IDciRequest = TypeOf<typeof dciSchema>;

export const EditMarqueForm: React.FC<FormEditProps> = ({
  id,
  handleClose,
}) => {
  const { addToast, removeToast } = useToasts();
  const { data, isLoading } = useShowMarqueQuery(id);
  const [updateMarque] = useUpdateMarqueMutation();
  const methods = useForm<IDciRequest>({
    resolver: zodResolver(dciSchema),
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const submitHandler: SubmitHandler<IDciRequest> = async (data) => {
    updateMarque({ id, name: data.name })
      .unwrap()
      .then(() => {
        handleClose();
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-marque",
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
        Edit marque
      </DialogTitle>
      <DialogContent>
        {isLoading ? (
          <Grid display="flex" justifyContent="center">
            <CircularProgress color="inherit" />
          </Grid>
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
                  />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                  <CancelButton onClick={handleClose}>Cancel</CancelButton>
                  <ConfirmButtonStyled type="submit">
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
