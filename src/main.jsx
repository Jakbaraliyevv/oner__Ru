import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import root from "./root/index.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={root} />
);
