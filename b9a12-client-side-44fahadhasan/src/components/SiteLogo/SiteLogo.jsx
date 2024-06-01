import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const SiteLogo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="w-[140px] sm:w-36" />
    </Link>
  );
};

export default SiteLogo;
