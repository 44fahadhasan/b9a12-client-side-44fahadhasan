import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Tost from "./components/Tost/Tost";
import AuthProvider from "./context/AuthProvider";
import LogoutProvider from "./context/LogoutProvider";
import "./index.css";
import routes from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl">
      <AuthProvider>
        <LogoutProvider>
          <RouterProvider router={routes} />
          <Tost />
        </LogoutProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
