import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/Auth.context";

export const PrivateRoutes = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  return isLogged ? children : <Navigate to={"/"} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
