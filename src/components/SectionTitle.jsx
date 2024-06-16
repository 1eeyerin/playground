import styled from "styled-components";
import Typography from "./Typography";

const SectionTitle = ({ children }) => {
  return (
    <StyledContainer>
      <Typography as="h1" variant="typography5" weight="bold">
        {children}
      </Typography>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 60px;
`;

export default SectionTitle;
