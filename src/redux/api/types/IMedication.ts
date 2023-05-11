export interface IMedicationElement {
  id: number;
  dci: string;
  marque: string;
  dosage: string;
  form: string;
  category: string;
  description: string;
}
export interface IMedicationRequest {
  dci_id: number;
  marque_id: number;
  dosage: string;
  form_id: number;
  category_id: number;
  description: string;
}
