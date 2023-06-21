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
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateFormMutation } from "../../../../redux/api/admin/FormApi";
import { useUpdateDciMutation } from "../../../../redux/api/dci/dciApi";
import { useUpdateCategoryMutation } from "../../../../redux/api/admin/CategoryApi";
import { simpleElementSchema } from "../../../../core/utils/validator/SimpleElementValidator";
import { formTypes } from "../../../../core/constants/formType";
import { toast } from "react-toastify";

export const EditSimpleElementForm: React.FC<FormEditSimpleElementProps> = (
  props
) => {
  const { id, handleClose, item, type } = props;
  const { t } = useTranslation();
  const methods = useForm<ISimpleElement>({
    resolver: zodResolver(simpleElementSchema),
    defaultValues: { name: item.name },
    mode: "onChange",
  });
  const { handleSubmit, setError } = methods;

  const [updateMarque] = useUpdateMarqueMutation();
  const [updateForm] = useUpdateFormMutation();
  const [updateDci] = useUpdateDciMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const onSubmit: SubmitHandler<ISimpleElement> = async (data) => {
    let updateMutation;

    switch (type) {
      case formTypes.MARQUE_MODAL:
        updateMutation = updateMarque;
        break;
      case formTypes.FORM_MODAL:
        updateMutation = updateForm;
        break;
      case formTypes.DCI_MODAL:
        updateMutation = updateDci;
        break;
      case formTypes.CATEGORY_MODAL:
        updateMutation = updateCategory;
        break;
      default:
        return;
    }

    updateMutation({ id, name: data.name })
      .unwrap()
      .then(() => {
        handleClose();
        toast.success(t("label.successfully_modified"), {
          position: toast.POSITION.TOP_CENTER,
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
                id="name"
                placeholder={t("label.NAME")}
                type="Text"
                label={t("label.NAME")}
                name="name"
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
