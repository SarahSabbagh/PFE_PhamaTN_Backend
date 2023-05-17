import * as React from "react";
import Box from "@mui/material/Box";
import { DialogContent, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormInput } from "../../InputField/formInput/FormInput";
import { ConfirmButtonStyled } from "../formButton/ConfirmButton.styles";
import { CancelButton } from "../formButton/CancelButton.styles";
import { FormEditSimpleElementProps } from "./EditForm.types";
import { useUpdateMarqueMutation } from "../../../../redux/api/admin/MarqueApi";
import { ISimpleElement } from "../../../../redux/api/types/IResponseRequest";
import { useToasts } from "react-toast-notifications";
import { zodResolver } from "@hookform/resolvers/zod";
import { simpleElementSchema } from "../../../../core/utils/validator/AuthValidator";
import { useUpdateFormMutation } from "../../../../redux/api/admin/FormApi";
import { useUpdateDciMutation } from "../../../../redux/api/dci/dciApi";
import { useUpdateCategoryMutation } from "../../../../redux/api/admin/CategoryApi";
import { Loader } from "../../loader/Loader";

export const EditSimpleElementForm: React.FC<FormEditSimpleElementProps> = (
  props
) => {
  const { id, handleClose, item, title } = props;
  const methods = useForm<ISimpleElement>({
    resolver: zodResolver(simpleElementSchema),
    defaultValues: { name: item.name },
    mode: "onChange",
  });
  const { handleSubmit } = methods;
  const { addToast } = useToasts();

  const [
    updateMarque,
    { isLoading: marqueEditIsLoading, isSuccess: marqueEditIsSuccess },
  ] = useUpdateMarqueMutation();
  const [
    updateForm,
    { isLoading: formEditIsLoading, isSuccess: formEditIsSuccess },
  ] = useUpdateFormMutation();
  const [
    updateDci,
    { isLoading: dciEditIsLoading, isSuccess: dciEditIsSuccess },
  ] = useUpdateDciMutation();
  const [
    updateCategory,
    { isLoading: categoryEditIsLoading, isSuccess: categoryEditIsSuccess },
  ] = useUpdateCategoryMutation();

  const onSubmit: SubmitHandler<ISimpleElement> = async (data) => {
    let updateMutation;

    switch (title) {
      case "Marques":
        updateMutation = updateMarque;
        break;
      case "Forms":
        updateMutation = updateForm;
        break;
      case "DCI":
        updateMutation = updateDci;
        break;
      case "Category":
        updateMutation = updateCategory;
        break;
      default:
        return;
    }

    updateMutation({ id, name: data.name })
      .unwrap()
      .then(() => {
        handleClose();
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-marque",
        });
      });
  };

  return (
    <DialogContent>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormInput
                id="name"
                placeholder="Name"
                type="Text"
                label="Name"
                name="name"
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <CancelButton onClick={handleClose}>Cancel</CancelButton>
              <ConfirmButtonStyled type="submit">
                {formEditIsLoading ||
                categoryEditIsLoading ||
                dciEditIsLoading ||
                marqueEditIsLoading ? (
                  <Loader />
                ) : (
                  "edit"
                )}
              </ConfirmButtonStyled>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </DialogContent>
  );
};
