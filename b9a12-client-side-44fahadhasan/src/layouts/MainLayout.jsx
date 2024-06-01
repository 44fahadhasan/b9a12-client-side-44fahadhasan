import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/mainPages/shared/Footer/Footer";
import Navbar from "../pages/mainPages/shared/Navbar/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isShow = pathname === "/login" || pathname === "/register";

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
