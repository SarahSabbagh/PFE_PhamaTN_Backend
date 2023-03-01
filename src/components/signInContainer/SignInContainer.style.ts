import * as React from "react";
import { styled } from "@mui/system";
import { Container, ContainerProps } from "@mui/material";
import image from "../../assets/background.jpg";

export const RootStyle = styled(Container)<ContainerProps>({
  color: "darkslategray",
  backgroundColor: "#FFFF",
  padding: 8,
  display: "flex",
  flexDirection: "column",
  justifContent: "center",
  fontSize: 16,
  textAlign: "center",
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100% ",
  backgroundPosition: "center",

  minWidth: "100%",
  minHeight: "100%",
});
