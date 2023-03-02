import * as React from "react";
import { styled } from "@mui/system";
import { Container, ContainerProps } from "@mui/material";
import image from "../../../assets/bg.jpg";
import theme from "../../../theme/theme";

export const RootStyle = styled(Container)<ContainerProps>({
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh ",
    backgroundPosition: "center",
  },
});
