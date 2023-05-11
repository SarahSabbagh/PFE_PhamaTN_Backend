export interface SelectFieldProps<T> {
  id: string;
  label: string;
  placeholder: string;
  name: string;
  options: T[];
}
