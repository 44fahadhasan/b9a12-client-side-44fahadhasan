import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../pages/DashboardPages/shared/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    <main className="flex max-lg:flex-col">
      {/* sidebar */}
      <section className="bg-[#212121] lg:basis-[288px]">
        {/* hiddden button */}
        <div className="flex min-h-[55px] lg:min-h-[100vh] items-center justify-center ">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hidden Navigation" : "Show Navigation"}
          </Button>
        </div>

        <DashboardNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>

      {/* dynamic page render here */}
      <section className="grow">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
