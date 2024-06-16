import { createBrowserRouter } from "react-router-dom";
import { Home, Step1, Step2 } from "../pages";
import Container from "../components/Layout/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "step1",
        element: <Step1 />,
      },
      {
        path: "step2",
        element: <Step2 />,
      },
    ],
  },
]);

export default router;
