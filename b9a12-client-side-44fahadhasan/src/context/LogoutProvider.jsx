import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

export const LogoutContext = createContext(null);

const LogoutProvider = ({ children }) => {
  const [toogleComponent, setToogleComponent] = useState(false);

  const { user, userLogOut } = useAuth();

  useEffect(() => {
    if (user) {
      setToogleComponent(true);
    }
  }, [user]);

  // handle user logout
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("successfully Logout");
        setToogleComponent(false);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const logOutData = {
    toogleComponent,
    handleLogOut,
  };

  return (
    <LogoutContext.Provider value={logOutData}>
      {children}
    </LogoutContext.Provider>
  );
};

LogoutProvider.propTypes = {
  children: PropTypes.node,
};

export default LogoutProvider;
