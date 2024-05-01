import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../helper/LocalStorageInstance";
import { GetEmail, GetUsers } from "../services/Users/Users.services";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    GetUsers().then((res) => {
      setUsers(res);
    });

    if (getLocalStorage("logged") != null) {
      const loggedUser = getLocalStorage("logged");
      setUser(GetEmail(loggedUser));
    }
  }, []);

  const login = async (data) => {
    if (user !== null) {
      return alert("Usuário já logado");
    }
    const foundUser = users.find(
      (item) => item.password === data.password && item.email === data.email
    );
    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true);
      setLocalStorage("logged", foundUser.email);
      window.location.href = "/";
    } else {
      alert("Senha ou Email incorreto! Tente novamente");
    }
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("logged");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, users, isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
