import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Tost from "./components/Tost/Tost";
import AuthProvider from "./context/AuthProvider";
import LogoutProvider from "./context/LogoutProvider";
import "./index.css";
import routes from "./routes/Route";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LogoutProvider>
            <RouterProvider router={routes} />
            <Tost />
          </LogoutProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  </React.StrictMode>
);
