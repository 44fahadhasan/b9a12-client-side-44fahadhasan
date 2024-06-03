import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiinner from "../components/LoadingSpiinner/LoadingSpiinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  } else if (loading) {
    return <LoadingSpiinner />;
  }

  return <Navigate to="/Login" state={{ from: location }} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
