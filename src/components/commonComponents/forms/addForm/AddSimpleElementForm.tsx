import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { CancelButton } from "../formButton/CancelButton.styles";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { FormAddProps } from "./AddForm.types";
import { useAddCategoryMutation } from "../../../../redux/api/admin/CategoryApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf } from "zod";
import { simpleElementSchema } from "../../../../core/utils/validator/AuthValidator";
import { useAddMarqueMutation } from "../../../../redux/api/admin/MarqueApi";
import { useAddFormMutation } from "../../../../redux/api/admin/FormApi";
import { useAddDciMutation } from "../../../../redux/api/dci/dciApi";
type IDciRequest = TypeOf<typeof simpleElementSchema>;

export const AddSimpleElementForm: React.FC<FormAddProps> = (props) => {
  const { handleClose, title } = props;
  const methods = useForm<IDciRequest>({
    resolver: zodResolver(simpleElementSchema),
    defaultValues: { name: "" },
    mode: "onChange",
  });

  const { handleSubmit, setError } = methods;
  const [addCategory] = useAddCategoryMutation();
  const [addMarque] = useAddMarqueMutation();
  const [addForm] = useAddFormMutation();
  const [addDci] = useAddDciMutation();
  const submitHandlerAdd: SubmitHandler<IDciRequest> = (data) => {
    let addMutation;

    switch (title) {
      case "Marques":
        addMutation = addMarque;
        break;
      case "Forms":
        addMutation = addForm;
        break;
      case "DCI":
        addMutation = addDci;
        break;
      case "Category":
        addMutation = addCategory;
        break;
      default:
        return;
    }
    addMutation(data.name)
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
        <Box
          component="form"
          onSubmit={handleSubmit(submitHandlerAdd)}
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
              <ConfirmButtonStyled type="submit">Add</ConfirmButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
