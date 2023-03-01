import * as React from "react";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { PageContainerProps } from "./SignInContainer.types";
import { RootStyle } from "./SignInContainer.style";

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { title, children } = props;
  return (
    <RootStyle>
      <Helmet title={title} />
      {children}
    </RootStyle>
  );
};
