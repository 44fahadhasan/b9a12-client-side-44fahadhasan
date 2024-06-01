import { useContext } from "react";
import { LogoutContext } from "../context/LogoutProvider";

const useLogout = () => {
  return useContext(LogoutContext);
};

export default useLogout;
