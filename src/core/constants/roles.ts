import { IFilterItem } from "./status";

export const roles: IFilterItem[] = [
  { id: "ADMINISTRATOR", value: 1, label: "ADMINISTRATOR" },
  { id: "WHOLESALER", value: 2, label: "WHOLESALER" },
  { id: "PHARMACY", value: 3, label: "PHARMACY" },
];
export const rolesValue = {
  ADMINISTRATOR: "administrator",
  WHOLESALER: "wholesaler",
  PHARMACY: "pharmacy",
};
