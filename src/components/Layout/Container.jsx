import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Container = () => {
  return (
    <div>
      <Header />
      <StyledHr />
      <Outlet />
    </div>
  );
};

const StyledHr = styled.hr`
  height: 45px;
  border: none;
`;

export default Container;
