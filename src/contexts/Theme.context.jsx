import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { darkTheme, lightTheme } from "../Themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    setTheme((presentTheme) =>
      presentTheme === lightTheme ? darkTheme : lightTheme
    );
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
