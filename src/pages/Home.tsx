import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Divider, Grid, Stack, Typography } from "@mui/material";

export const Home: FC = () => {
  return (
    <PageContainer title="home">
      <Grid>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={3}
        >
          <Typography variant="h3">Hello, PharmaTn user</Typography>
        </Stack>
      </Grid>
    </PageContainer>
  );
};
