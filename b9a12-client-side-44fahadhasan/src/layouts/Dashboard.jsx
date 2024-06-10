import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../pages/DashboardPages/shared/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Dashboard") {
      document.title = "Dashboard - Home";
      return;
    }
    document.title = `${location.pathname
      .replaceAll("/", " - ")
      .replaceAll("-", " ")}`;
  }, [location]);

  return (
    <main className="flex max-lg:flex-col lg:min-h-[100vh]">
      {/* sidebar */}
      <section className="bg-[#212121]">
        {/* hiddden button */}
        <div className="flex min-h-[55px] lg:min-h-[100vh] items-center justify-end mr-4 lg:fixed bg-[#212121] lg:pr-2">
          <button
            className="text-4xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <MdOutlineMenuOpen />}
          </button>
        </div>

        <DashboardNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>

      {/* dynamic page render here */}
      <section className="grow bg-[#E6E7E8]">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
