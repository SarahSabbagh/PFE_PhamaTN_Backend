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
  id?: number;
  dci_id?: number;
  marque_id?: number;
  dosage?: string;
  form_id?: number;
  category_id?: number;
  description?: string;
}
export interface IFilterMedicationRequest {
  search?: string;
  page?: number;
  page_size?: number;
  sortBy?: string;
  sortOrder?: string;
  marque?: string;
  dosage?: string;
  form?: string;
  category?: string;
}