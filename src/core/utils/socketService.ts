import Echo from "laravel-echo";
import io from "socket.io-client";
import { globalVariables } from "../constants/globalVariables";

const SOCKET_URL = process.env.REACT_APP_SOCKET_ENDPOINT as string;
const token = localStorage.getItem(globalVariables.TOKEN);

export const echo: Echo = new Echo({
  broadcaster: "socket.io",
  client: io,
  host: SOCKET_URL,
  authEndpoint: "/broadcasting/auth",
  transports: ["websocket"],
  auth: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});
