import React from "react";
import SectionCode from "./SectionCode";
import styled from "styled-components";

const CodeWrapper = ({ children }) => {
  return (
    <StyledContainer>
      {children}
      <SectionCode isStaticMarkup>{children}</SectionCode>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: block;
`;

export default CodeWrapper;
