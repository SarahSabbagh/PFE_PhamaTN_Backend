import { Dayjs } from "dayjs";

export interface CustomDatePickerProps {
  id: string;
  label: string;
  name: string;
  defaultValue: Dayjs;
}
