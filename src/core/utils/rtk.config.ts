import { globalVariables } from "../constants/globalVariables";

/**
 * Return a Header containing a valid  token
 *
 * @returns {Headers}
 */
export const prepareHeaders = () => {
  const headers = new Headers();
  const token: string | null = localStorage.getItem(globalVariables.TOKEN);
  const i18nextLng: string | null = localStorage.getItem("i18nextLng");
  if (token !== null) {
    headers.set(globalVariables.AUTHORIZATION_KEY, `Bearer ${token}`);
  }
  headers.set("Accept", "application/json");
  i18nextLng && headers.set("Accept-Language", i18nextLng);

  return headers;
};
