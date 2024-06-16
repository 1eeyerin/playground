import React from "react";
import ReactDOMServer from "react-dom/server";
import SectionCode from "./SectionCode";
import styled from "styled-components";

const CodeWrapper = ({ children }) => {
  const codeString = ReactDOMServer.renderToStaticMarkup(children);

  return (
    <StyledContainer>
      {children}
      <SectionCode>{codeString}</SectionCode>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: block;
  margin: 150px 0;
`;

export default CodeWrapper;
