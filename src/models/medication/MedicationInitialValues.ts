import { IMedicationRequest } from "../../redux/api/types/IMedication";

export const defaultValues: IMedicationRequest = {
  dci_id: 0,
  marque_id: 0,
  form_id: 0,
  category_id: 0,
  dosage: "",
  description: "",
  min_quantity: 0,
};
