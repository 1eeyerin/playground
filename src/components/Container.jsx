import { Outlet } from "react-router-dom";
import Header from "./Header";

const Container = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Container;
