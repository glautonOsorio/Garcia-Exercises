import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? children : <Navigate to={"/"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
