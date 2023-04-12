import * as React from "react";
import { Grid, Typography, colors } from "@mui/material";
import { FooterProps } from "./Footer.types";
import Divider from "@mui/material/Divider";
import { StyledFooter } from "./Footer.style";
import { Item } from "./item/Item";

export const Footer: React.FC<FooterProps> = (props) => {
  //const { children } = props;
  return (
    <StyledFooter container direction={"row"}>
      <Item email title="Email" description="pharmaTN@gmail.com" />
      <Item
        address
        title="Address"
        description="51, Avenue 10 Décembre 1948 - 1082, C. MAHRAJÈNE TUNIS tn"
      />
      <Item phone title="phone" description="71 389 020" />
    </StyledFooter>
  );
};
