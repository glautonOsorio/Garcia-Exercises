import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/Header/Header.component";
import { FooterComponent } from "../components/Footer/Footer.component";
import * as Styled from "./Layout.styles";
import { ThemeContext } from "../contexts/Theme.context";
import { useContext } from "react";

export const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Styled.App $theme={theme}>
      <Styled.Main>
        <HeaderComponent />
        <Styled.Content>
          <Outlet />
        </Styled.Content>
        <FooterComponent />
      </Styled.Main>
    </Styled.App>
  );
};
