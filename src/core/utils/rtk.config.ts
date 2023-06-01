import { globalVariables } from "../constants/globalVariables";

/**
 * Return a Header containing a valid  token
 * @param {headers}
 * @returns {Headers}
 */
export const prepareHeaders = (headers: Headers) => {
  const token: string | null = localStorage.getItem(globalVariables.TOKEN);
  if (token !== null) {
    headers.set(globalVariables.AUTHORIZATION_KEY, `Bearer ${token}`);
  }
  headers.set("Accept", "application/json");

  return headers;
};
