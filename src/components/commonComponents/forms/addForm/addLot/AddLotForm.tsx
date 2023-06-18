import * as React from "react";
import { FormAddLotProps } from "../AddForm.types";
import { Step, StepLabel, DialogContent, Typography } from "@mui/material";
import { AddLotStepOne } from "./stepOne/AddLotStepOne";
import { useMedicationsFilterQuery } from "../../../../../redux/api/admin/MedicationApi";
import { AddLotStepTwo } from "./stepTwo/AddLotStepTwo";
import { useTranslation } from "react-i18next";
import { StyledStepper } from "./AddLotForm.style";

export const AddLot: React.FC<FormAddLotProps> = (props) => {
  const { marques, forms, categories, handleClose } = props;
  const { t } = useTranslation();
  const [medicationId, setMedicationId] = React.useState<number>();
  const [errorStepOne, setErrorStepOne] = React.useState<boolean>(false);
  const [errorStepTwo, setErrorStepTwo] = React.useState<boolean>(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const { data: medications } = useMedicationsFilterQuery({});

  const handleMedicationId = (id: number) => {
    setMedicationId(id);
  };
  const handleErrorStepOne = (error: boolean) => {
    setErrorStepOne(error);
  };
  const handleErrorStepTwo = (error: boolean) => {
    setErrorStepTwo(error);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <DialogContent>
      <StyledStepper activeStep={activeStep}>
        <Step>
          <StepLabel
            error={errorStepOne}
            optional={
              errorStepOne && (
                <Typography variant="caption" color="error">
                  {t("label.MEDICATION_NOT_FOUND")}
                </Typography>
              )
            }
          >
            {t("label.SELECT_MEDICATION")}
          </StepLabel>
        </Step>
        <Step>
          <StepLabel error={errorStepTwo}> {t("label.ADD_LOT")}</StepLabel>
        </Step>
      </StyledStepper>
      {activeStep === 1 && medicationId ? (
        <AddLotStepTwo
          medicationId={medicationId}
          handleError={handleErrorStepTwo}
          handleBack={handleBack}
          handleClose={handleClose}
        />
      ) : (
        activeStep === 0 && (
          <AddLotStepOne
            marques={marques}
            categories={categories}
            forms={forms}
            isLoading={false}
            handleNext={handleNext}
            handleMedicationId={handleMedicationId}
            handleError={handleErrorStepOne}
            medications={medications?.data}
          />
        )
      )}
    </DialogContent>
  );
};
