import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/step1">Step1</Link>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export default Header;
