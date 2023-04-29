import { StyledPageContainerProps } from "./PageContainer.types";
import * as React from "react";
import { Container, ContainerProps, styled } from "@mui/material";
import image from "../../../assets/bg4.jpg";
import { colors } from "../../../core/constants/colors";

export const RootStyle = styled(Container)<
  ContainerProps & StyledPageContainerProps
>((props) =>
  props.background
    ? {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100% ",
        backgroundPosition: "center",
      }
    : { backgroundColor: colors.grey.xlight }
);
