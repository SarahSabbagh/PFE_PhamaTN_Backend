import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Stack, Typography } from "@mui/material";

export const Profile: FC = () => {
  return (
    <PageContainer title="Profile">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={3}
      >
        <Typography variant="h3">Hello</Typography>
        <Typography variant="h3">Profile Page</Typography>
      </Stack>
    </PageContainer>
  );
};
