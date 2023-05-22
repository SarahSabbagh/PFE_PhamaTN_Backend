import Echo from "laravel-echo";
import { io } from "socket.io-client";
import { prepareHeaders } from "./core/utils/rtk.config";
import Socketio from "socket.io-client";

const URL = "http://127.0.0.1:6001";

export const socket = io(URL);

export const echo: Echo = new Echo({
  broadcaster: "socket.io",
  transports: ["websocket"],
  client: Socketio,
  host: URL,
  auth: {
    headers: prepareHeaders,
  },
});
