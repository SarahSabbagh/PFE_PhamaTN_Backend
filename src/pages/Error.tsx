import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";

export const ErrorPage: FC = () => {
  return (
    <PageContainer title="Page not found">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h1">Page not found</Typography>
      </Stack>
    </PageContainer>
  );
};
