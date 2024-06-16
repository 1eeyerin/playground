import styled from "styled-components";
import Typography from "./Typography";

const SectionText = ({ children }) => {
  return (
    <StyledContainer>
      <Typography as="p" variant="typography3" weight="bold">
        {children}
      </Typography>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 60px;
`;

export default SectionText;
