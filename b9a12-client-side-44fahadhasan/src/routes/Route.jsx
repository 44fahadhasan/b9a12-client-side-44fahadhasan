import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/commonPages/ErrorPage/ErrorPage";
// import HomePage from "../pages/mainPages/HomePage/HomePage";
import Dashboard from "../layouts/Dashboard";
import AddPublisherPage from "../pages/DashboardPages/AddPublisherPage/AddPublisherPage";
import AllArticlesPageAdmin from "../pages/DashboardPages/AllArticlesPageAdmin/AllArticlesPageAdmin";
import AllUsersPage from "../pages/DashboardPages/AllUsersPage/AllUsersPage";
import DashboardPage from "../pages/DashboardPages/DashboardPage/DashboardPage";
import AddArticlePage from "../pages/UserPages/AddArticlePage/AddArticlePage";
import AllArticlesPage from "../pages/UserPages/AllArticlesPage/AllArticlesPage";
import ArticleDetails from "../pages/UserPages/ArticleDetails/ArticleDetails";
import MyProfilePage from "../pages/UserPages/MyProfilePage/MyProfilePage";
import HomeContainer from "../pages/mainPages/HomePage/HomeContainer/HomeContainer";
import LoginPage from "../pages/mainPages/LoginPage/LoginPage";
import RegisterPage from "../pages/mainPages/RegisterPage/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  // main layout routes
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
      {
        path: "Article-Details/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/articles/${params?.id}`),
        element: (
          <PrivateRoute>
            <ArticleDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "My-Profile",
        element: (
          <PrivateRoute>
            <MyProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },

  // dashboard layout routes

  {
    path: "Dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "All-Users",
        element: <AllUsersPage />,
      },
      {
        path: "All-Articles",
        element: <AllArticlesPageAdmin />,
      },
      {
        path: "Add-Publisher",
        element: <AddPublisherPage />,
      },
    ],
  },
]);

export default routes;
