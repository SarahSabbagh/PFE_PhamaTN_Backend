import React from "react";
import { FC } from "react";
import { useRouteError } from "react-router-dom";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";

export const ErrorPage: FC = () => {
  const error: any = useRouteError();

  return (
    <PageContainer title={error.statusText}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Typography variant="h3">{error.status}</Typography>
        <Typography variant="h3">{error.statusText}</Typography>
      </Stack>
    </PageContainer>
  );
};
