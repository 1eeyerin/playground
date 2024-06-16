import styled from "styled-components";

const SectionCode = ({ children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <pre>
      <Container>
        <StyledCode>{children}</StyledCode>
        <CopyButton onClick={handleCopy}>COPY</CopyButton>
      </Container>
    </pre>
  );
};

const StyledCode = styled.code`
  background-color: #e9ebf2;
  display: block;
  padding: 30px 45px 30px 25px;
  border-radius: 10px;
  min-height: 20px;
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
`;

const Container = styled.div`
  position: relative;
`;

export default SectionCode;
