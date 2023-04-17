import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";

export const Dashboard: FC = () => {
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
