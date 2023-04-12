import * as React from "react";
import { Helmet } from "react-helmet";
import { PageContainerProps } from "./PageContainer.types";
import { RootStyle } from "./PageContainer.style";
import { Footer } from "../../../layouts/footer/Footer";

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { title, children, background } = props;
  return (
    <RootStyle background={background ? background : false}>
      <Helmet title={title} />
      {children}
    </RootStyle>
  );
};
