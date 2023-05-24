import React, { useEffect } from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";
import Echo from "laravel-echo";
import { io } from "socket.io-client";
export const Dashboard: FC = () => {
  useEffect(() => {
    const echo: Echo = new Echo({
      broadcaster: "socket.io",
      client: io,
      host: "http://localhost:6001",
    });
    echo.connector.socket.on("connect", () => {
      console.log("Connected to Laravel Echo Server");
      echo
        .channel("newUserRegistered-channel")
        .listen(".NewUserRegisteredEvent", (e: any) => {
          console.log(e);
        });
    });
    echo.connector.socket.on("connect_error", (error: any) => {
      console.error("Failed to connect to Laravel Echo Server:", error);
    });
    echo.connect();
    return () => {
      echo.disconnect();
    };
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
