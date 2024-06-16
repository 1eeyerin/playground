import { createBrowserRouter } from "react-router-dom";
import { Home, Step1, Step2, Step3, Step4 } from "../pages";
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
      {
        path: "step3",
        element: <Step3 />,
      },
      {
        path: "step4",
        element: <Step4 />,
      },
    ],
  },
]);

export default router;
