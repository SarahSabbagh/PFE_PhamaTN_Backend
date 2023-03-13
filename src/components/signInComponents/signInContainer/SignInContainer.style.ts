import * as React from "react";
import { Container, ContainerProps, styled } from "@mui/material";
import image from "../../../assets/bg.jpeg";

export const RootStyle = styled(Container)<ContainerProps>({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100% ",
  backgroundPosition: "center",
});
