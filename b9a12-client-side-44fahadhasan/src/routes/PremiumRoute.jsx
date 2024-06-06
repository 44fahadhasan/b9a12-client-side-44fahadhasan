import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiinner from "../components/LoadingSpiinner/LoadingSpiinner";
import useUserInfo from "../hooks/useUserInfo";

const PremiumRoute = ({ children }) => {
  const location = useLocation();
  const { activeUserInfo, isLoading } = useUserInfo();

  if (activeUserInfo?.premium) {
    return children;
  } else if (isLoading) {
    return <LoadingSpiinner />;
  }

  return <Navigate to="/" state={{ from: location }} replace={true} />;
};

PremiumRoute.propTypes = {
  children: PropTypes.node,
};

export default PremiumRoute;
