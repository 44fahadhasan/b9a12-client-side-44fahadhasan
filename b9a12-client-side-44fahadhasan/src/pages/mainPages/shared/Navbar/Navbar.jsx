import MainNav from "./MainNav/MainNav";
import TopNavbar from "./TopNavbar/TopNavbar";

const Navbar = () => {
  return (
    <nav className="font-[sans-serif] min-h-[60px] tracking-wide relative z-10">
      <TopNavbar />
      <MainNav />
    </nav>
  );
};

export default Navbar;
