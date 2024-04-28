import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../helper/LocalStorageInstance";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(getLocalStorage("logged") !== null);

  const login = async (data) => {
    const getUser = await GetEmail(data.email);

    if (getUser.password !== data.password) {
      alert("Senha ou Email errado! tente novamente");
      return false;
    }

    setUser(data);
    setIsLogged(true);
    setLocalStorage("logged", true);
    return true;
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("logged");
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
