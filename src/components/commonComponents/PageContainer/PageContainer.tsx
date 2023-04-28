import * as React from "react";
import { Helmet } from "react-helmet";
import { PageContainerProps } from "./PageContainer.types";
import { RootStyle } from "./PageContainer.style";
import { ContainerProps } from "@mui/material";

export const PageContainer: React.FC<PageContainerProps & ContainerProps> = (
  props
) => {
  const { title, children, background } = props;
  return (
    <RootStyle background={background}>
      <Helmet title={title} />
      {children}
    </RootStyle>
  );
};
