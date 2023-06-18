import * as React from "react";
import { Stepper, StepperProps, styled } from "@mui/material";

export const StyledStepper = styled(Stepper)<StepperProps>(() => ({
  padding: "2.5rem",
}));
