import { Governorate } from "./../../../../redux/api/types/IRegion";
export interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  options: Governorate[];
}
