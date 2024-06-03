import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/commonPages/ErrorPage/ErrorPage";
// import HomePage from "../pages/mainPages/HomePage/HomePage";
import AddArticlePage from "../pages/UserPages/AddArticlePage/AddArticlePage";
import AllArticlesPage from "../pages/UserPages/AllArticlesPage/AllArticlesPage";
import HomeContainer from "../pages/mainPages/HomePage/HomeContainer/HomeContainer";
import LoginPage from "../pages/mainPages/LoginPage/LoginPage";
import RegisterPage from "../pages/mainPages/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

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
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Register",
        element: <RegisterPage />,
      },

      // user public routes
      {
        path: "All-Articles",
        element: <AllArticlesPage />,
      },

      // user private routes
      {
        path: "Add-Articles",
        element: (
          <PrivateRoute>
            <AddArticlePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
