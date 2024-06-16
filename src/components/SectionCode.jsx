import styled from "styled-components";
import { renderToStaticMarkup } from "react-dom/server";

const SectionCode = ({ children, isStaticMarkup = false }) => {
  const codeString = isStaticMarkup ? renderToStaticMarkup(children) : children;

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <StyledPre>
      <Container>
        <StyledCode>{codeString}</StyledCode>
        <CopyButton onClick={handleCopy}>COPY</CopyButton>
      </Container>
    </StyledPre>
  );
};

const StyledPre = styled.pre`
  margin-bottom: 100px;
`;

const StyledCode = styled.code`
  background-color: #e9ebf2;
  display: block;
  padding: 30px 45px 30px 25px;
  border-radius: 10px;
  min-height: 20px;
  white-space: pre-wrap;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 5px;
  border: none;
  background-color: transparent;
  outline: none;
  background-color: #ffffff;
  font-size: 10px;
  font-weight: bolder;
  height: auto;
`;

const Container = styled.div`
  position: relative;
`;

export default SectionCode;
