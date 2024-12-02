import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Korzina from "../pages/korzina";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "korzina",
    element: <Korzina />,
  },
]);

export default root;
