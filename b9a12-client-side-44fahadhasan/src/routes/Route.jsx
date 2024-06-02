import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/commonPages/ErrorPage/ErrorPage";
// import HomePage from "../pages/mainPages/HomePage/HomePage";
import HomeContainer from "../pages/mainPages/HomePage/HomeContainer/HomeContainer";
import LoginPage from "../pages/mainPages/LoginPage/LoginPage";
import RegisterPage from "../pages/mainPages/RegisterPage/RegisterPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default routes;
