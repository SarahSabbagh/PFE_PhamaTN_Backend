import React, { useEffect } from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";
import { io } from "socket.io-client";
import Echo from "laravel-echo";
import { prepareHeaders } from "../core/utils/rtk.config";
import Socketio from "socket.io-client";
import { socket } from "../socket";

export const Dashboard: FC = () => {
  useEffect(() => {
    // Listen for the 'newUserRegistered' event

    const URL = "http://localhost:6001";

    const echo: Echo = new Echo({
      broadcaster: "socket.io",
      transports: ["websocket"],
      client: Socketio,
      authEndpoint: "/broadcasting/auth",
      host: URL,
      devMode: true,
    });
    echo.options.debug = true;

    echo.connector.socket.on("connect", () => {
      console.log("Socket connected");
    });
    echo.connector.socket.on("reconnecting", (attemptNumber: any) => {
      console.log(
        `%cSocket reconnecting attempt ${attemptNumber}`,
        "color:orange; "
      );
    });
    const channel = echo.channel("pharmatn_database_newUserRegistered-channel");
    console.log(channel);
    channel.listen(".NewUserRegisteredEvent", (e: any) => {
      console.log("Received event:", e);
      // Handle the event data
    });

    return () => {
      channel.stopListening(".NewUserRegisteredEvent");
    };
    // useEffect(() => {
    //   const socket = io("http://localhost/api/broadcasting/auth");
    //   socket.on("connect", () => {
    //     console.log("Socket connected");
    //     console.log(socket);
    //   });

    //   return () => {
    //     socket.disconnect();
    //   };
  }, []);

  return (
    <PageContainer title="dashboard">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Typography variant="h3">Hello</Typography>
        <Typography variant="h3">Dashboard</Typography>
      </Stack>
    </PageContainer>
  );
};
