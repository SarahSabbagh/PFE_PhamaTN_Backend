import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { ItemProps } from "./Item.types";
import { StyledGridItem } from "./Item.style";

export const Item: React.FC<ItemProps> = (props) => {
  const { address, email, phone, title, description } = props;
  return (
    <StyledGridItem width={"100%"} container item rowSpacing={1} sm={4}>
      <Grid item xs={2}>
        {address && !email && !phone && <RoomOutlinedIcon fontSize="large" />}
        {email && !address && !phone && <EmailOutlinedIcon fontSize="large" />}
        {phone && !address && !email && <PhoneOutlinedIcon fontSize="large" />}
      </Grid>

      <Grid item xs={6}>
        <Stack>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h6">{description}</Typography>
        </Stack>
      </Grid>
    </StyledGridItem>
  );
};
