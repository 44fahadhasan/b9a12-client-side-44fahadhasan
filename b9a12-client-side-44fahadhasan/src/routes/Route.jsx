import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import MainLayout from "../layouts/MainLayout";
import AddPublisherPage from "../pages/DashboardPages/AddPublisherPage/AddPublisherPage";
import AllArticlesPageAdmin from "../pages/DashboardPages/AllArticlesPageAdmin/AllArticlesPageAdmin";
import AllUsersPage from "../pages/DashboardPages/AllUsersPage/AllUsersPage";
import DashboardPage from "../pages/DashboardPages/DashboardPage/DashboardPage";
import AddArticlePage from "../pages/UserPages/AddArticlePage/AddArticlePage";
import AllArticlesPage from "../pages/UserPages/AllArticlesPage/AllArticlesPage";
import ArticleDetails from "../pages/UserPages/ArticleDetails/ArticleDetails";
import MyArticlesPage from "../pages/UserPages/MyArticlesPage/MyArticlesPage";
import MyProfilePage from "../pages/UserPages/MyProfilePage/MyProfilePage";
import PremiumArticles from "../pages/UserPages/PremiumArticles/PremiumArticles";
import SubscriptionPage from "../pages/UserPages/SubscriptionPage/SubscriptionPage";
import ErrorPage from "../pages/commonPages/ErrorPage/ErrorPage";
import HomeContainer from "../pages/mainPages/HomePage/HomeContainer/HomeContainer";
import LoginPage from "../pages/mainPages/LoginPage/LoginPage";
import RegisterPage from "../pages/mainPages/RegisterPage/RegisterPage";
import AdminRoute from "./AdminRoute";
import PremiumRoute from "./PremiumRoute";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      // user public routes
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
        path: "Subscription",
        element: (
          <PrivateRoute>
            <SubscriptionPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-Articles",
        element: (
          <PrivateRoute>
            <MyArticlesPage />
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

      // premium user route
      {
        path: "Premium-Articles",
        element: (
          <PrivateRoute>
            <PremiumRoute>
              <PremiumArticles />
            </PremiumRoute>
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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DashboardPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "All-Users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsersPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "All-Articles",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllArticlesPageAdmin />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "Add-Publisher",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddPublisherPage />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
