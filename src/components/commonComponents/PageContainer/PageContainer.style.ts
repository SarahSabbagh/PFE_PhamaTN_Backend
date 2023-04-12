import { StyledPageContainerProps } from "./PageContainer.types";
import * as React from "react";
import { Container, ContainerProps, styled } from "@mui/material";
import image from "../../../assets/bg4.jpg";

export const RootStyle = styled(Container)<
  ContainerProps & StyledPageContainerProps
>(
  (props) =>
    props.background === true && {
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100% ",
      backgroundPosition: "center",
    }
);
