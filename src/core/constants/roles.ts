import i18next from "i18next";
import { IFilterItem } from "./status";

const translate = (key: string): string => i18next.t(key) || "";

export const roles: IFilterItem[] = [
  { id: "ADMINISTRATOR", value: 1, label: translate("label.ADMINISTRATOR") },
  { id: "WHOLESALER", value: 2, label: translate("label.WHOLESALER") },
  { id: "PHARMACY", value: 3, label: translate("label.PHARMACY") },
];
