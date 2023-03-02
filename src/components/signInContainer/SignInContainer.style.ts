import * as React from "react";
import { styled } from "@mui/system";
import { Container, ContainerProps } from "@mui/material";
import image from "../../assets/background.jpg";

export const RootStyle = styled(Container)<ContainerProps>({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100% ",
  backgroundPosition: "center",
});
