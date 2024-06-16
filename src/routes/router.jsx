import { createBrowserRouter } from "react-router-dom";
import { Step1 } from "../pages";
import Container from "../components/Layout/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      {
        path: "step1",
        element: <Step1 />,
      },
    ],
  },
]);

export default router;
