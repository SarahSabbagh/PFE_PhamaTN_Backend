export interface AddLotStepTwoProps {
  handleBack: () => void;
  handleError: (error: boolean) => void;
  medicationId: number;
  handleClose?: () => void;
}
