import * as React from "react";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
import { PageContainerProps } from "./PageContainer.types";


export const PageContainer: React.FC<PageContainerProps> = (props) => {
    const { title, children } = props;
    return (
      <Container>
        <Helmet title={title} />
        {children}
      </Container>
    );
  };
  