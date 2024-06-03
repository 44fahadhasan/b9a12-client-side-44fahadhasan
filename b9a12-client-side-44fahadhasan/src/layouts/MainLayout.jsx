import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/mainPages/shared/Footer/Footer";
import Navbar from "../pages/mainPages/shared/Navbar/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isShow = pathname === "/Login" || pathname === "/Register";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Discussion - Home";
      return;
    }
    document.title = `Discussion - ${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <div>
      {/* navbar */}
      {isShow || <Navbar />}

      {/* main layout */}
      <main className="min-h-[calc(100vh-438px)]">
        <Outlet />
      </main>

      {/* footer */}
      {isShow || <Footer />}
    </div>
  );
};

export default MainLayout;
