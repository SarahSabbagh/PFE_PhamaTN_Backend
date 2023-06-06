import i18next from "i18next";

const translate = (key: string): string => i18next.t(key) || "";

export interface IFilterItem {
  id: string;
  value: number;
  label: string;
}
export const status: IFilterItem[] = [
  { id: "REFUSED", value: 0, label: translate("label.REFUSED") },
  { id: "PENDING", value: 1, label: translate("label.PENDING") },
  { id: "ACCEPTED", value: 2, label: translate("label.ACCEPTED") },
];
