export interface IFilterItem {
  id: string;
  value: number;
  label: string;
}
export const status: IFilterItem[] = [
  { id: "REFUSED", value: 0, label: "REFUSED" },
  { id: "PENDING", value: 1, label: "PENDING" },
  { id: "ACCEPTED", value: 2, label: "ACCEPTED" },
];
