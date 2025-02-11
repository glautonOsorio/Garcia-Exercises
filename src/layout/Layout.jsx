import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { HeaderComponent } from "../components/Header/Header.component";
import { FooterComponent } from "../components/Footer/Footer.component";
import { NavBarComponent } from "../components/NavBar/NavBar.component";

import { ThemeContext } from "../contexts/Theme.context";

import * as Styled from "./Layout.styles";

export const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Styled.App $theme={theme}>
      <Styled.Main $theme={theme}>
        <HeaderComponent />
        <NavBarComponent />
        <Styled.Content $theme={theme}>
          <Outlet />
        </Styled.Content>
        <FooterComponent />
      </Styled.Main>
    </Styled.App>
  );
};
