import { IMedicationElement } from "../../../../../../redux/api/types/IMedication";
import { ISimpleElement } from "../../../../../../redux/api/types/IResponseRequest";

export interface AddLotStepOneProps {
  marques: ISimpleElement[];
  categories: ISimpleElement[];
  forms: ISimpleElement[];
  isLoading: boolean;
  handleNext: () => void;
  handleMedicationId: (id: number) => void;
  handleError: (error: boolean) => void;
  medications?: IMedicationElement[];
}
