import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
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
      GetEmail(loggedUser).then((res) => {
        setUser(res[0]);
        setIsLogged(true);
      });
    }
  }, []);

  const login = async (data) => {
    if (user !== null) {
      toast.error("Usuário já logado", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
      return;
    }
    const foundUser = users.find(
      (item) => item.password === data.password && item.email === data.email
    );
    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true);
      setLocalStorage("logged", foundUser.email);
      toast.success("Bem Vindo!", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      window.location.href = "/";
    } else {
      toast.error("Senha ou Email incorreto! Tente novamente", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
    }
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("logged");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        setUser,
        setUsers,
        isLogged,
        setIsLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
