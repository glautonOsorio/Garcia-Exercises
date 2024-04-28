import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const showLogin = () => {
    setRegister(false);
    setLogin(true);
  };

  const showRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <LoginContext.Provider value={{ login, register, showLogin, showRegister }}>
      {children}
    </LoginContext.Provider>
  );
};

LoginContextProvider.propTypes = {
  children: PropTypes.node,
};
