import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SelectField } from "../../../../InputField/selectInput/SelectField";
import { ISimpleElement } from "../../../../../../redux/api/types/IResponseRequest";
import { FormInput } from "../../../../InputField/formInput/FormInput";
import { AddLotStepOneProps } from "./AddLotStepOne.types";
import { TypeOf } from "zod";
import { lotStepOneSchema } from "../../../../../../core/utils/validator/LotValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMedicationElement } from "../../../../../../redux/api/types/IMedication";
import { useTranslation } from "react-i18next";

type lotStepOne = TypeOf<typeof lotStepOneSchema>;

function searchMedication(
  array: IMedicationElement[],
  searchCriteria: Partial<IMedicationElement>
): number | null {
  const result = array.find((item: IMedicationElement) => {
    for (const key in searchCriteria) {
      if (
        item[key as keyof IMedicationElement] !==
        searchCriteria[key as keyof lotStepOne]
      ) {
        return false;
      }
    }
    return true;
  });

  return result ? result.id : null;
}
function searchNameById(
  array: ISimpleElement[],
  id: number
): string | undefined {
  const result = array.find((item: ISimpleElement) => item.id === id);
  return result ? result.name : undefined;
}

export const AddLotStepOne: React.FC<AddLotStepOneProps> = (props) => {
  const {
    marques,
    categories,
    forms,
    handleNext,
    medications,
    handleMedicationId,
    handleError,
  } = props;
  const { t } = useTranslation();

  const methods = useForm<lotStepOne>({
    resolver: zodResolver(lotStepOneSchema),
    defaultValues: { marque: 0, category: 0, form: 0, dosage: "" },
    mode: "onChange",
  });

  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<lotStepOne> = async (data) => {
    if (medications) {
      const medicationId = searchMedication(medications, {
        marque: searchNameById(marques, data.marque),
        form: searchNameById(forms, data.form),
        category: searchNameById(categories, data.category),
        dosage: data.dosage,
      });
      if (medicationId) {
        handleMedicationId(medicationId);
        handleError(false);
        handleNext();
      } else {
        handleError(true);
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <SelectField<ISimpleElement>
              id="marque"
              label={t("cells.BRAND")}
              placeholder={t("cells.BRAND")}
              name="marque"
              options={marques}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField<ISimpleElement>
              id="form"
              label={t("cells.FORM")}
              placeholder={t("cells.FORM")}
              name="form"
              options={forms}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField<ISimpleElement>
              id="category"
              label={t("cells.CATEGORY")}
              placeholder={t("cells.CATEGORY")}
              name="category"
              options={categories}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              id="dosage"
              placeholder={t("cells.DOSAGE")}
              type="text"
              label={t("cells.DOSAGE")}
              name="dosage"
              required
            />
          </Grid>
          <Grid>
            <Button type="submit">{t("label.NEXT")}</Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};
