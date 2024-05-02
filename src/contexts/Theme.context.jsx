import { createContext, useEffect, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../helper/LocalStorageInstance";
import PropTypes from "prop-types";

import { darkTheme, lightTheme } from "../Themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    if (getLocalStorage("theme") != null) {
      const storage = getLocalStorage("theme");
      setTheme(storage);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    setLocalStorage("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
