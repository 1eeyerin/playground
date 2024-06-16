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
  padding: 32px 0;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #e9ebf2;
  z-index: 100;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export default Header;
