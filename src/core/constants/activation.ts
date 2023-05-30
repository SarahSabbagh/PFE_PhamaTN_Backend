import i18next from "i18next";
import { IFilterItem } from "./status";

const translate = (key: string): string => i18next.t(key) || "";

export const activation: IFilterItem[] = [
  { id: "DISABLED", value: 0, label: translate("label.DISABLED") },
  { id: "ACTIVATED", value: 1, label: translate("label.ACTIVATED") },
];
