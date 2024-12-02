import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import root from "./root/index.jsx";
import { ShopContext1 } from "./context/shopContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <ShopContext1>
    <RouterProvider router={root} />
  </ShopContext1>
);
