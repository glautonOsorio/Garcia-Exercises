import { useContext } from "react";

import { AuthContext } from "../../contexts/Auth.context.jsx";
import { ThemeContext } from "../../contexts/Theme.context.jsx";

import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";

import * as Styled from "./NavBar.styles";

export const NavBarComponent = () => {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <Styled.NavBarContainer $theme={theme}>
      <Styled.StyledLink to={"/"} $theme={theme}>
        Pagina Principal <HomeIcon />
      </Styled.StyledLink>
      <Styled.StyledLink to={`/location-list`} $theme={theme}>
        Lista de Locais <ListIcon />
      </Styled.StyledLink>
      {user && (
        <>
          <Styled.StyledLink to={`/location-list/${user.id}`} $theme={theme}>
            Seus Locais <ListAltIcon />
          </Styled.StyledLink>
          <Styled.StyledLink to={`/register-locations`} $theme={theme}>
            Cadastrar novos locais <AddIcon />
          </Styled.StyledLink>
          <Styled.StyledLink to={`/config-user/${user.id}`} $theme={theme}>
            Configurar <SettingsIcon />
          </Styled.StyledLink>
          <Styled.StyledLink onClick={() => logout()} $theme={theme}>
            Logout <LogoutIcon fontSize="small" />
          </Styled.StyledLink>
        </>
      )}
    </Styled.NavBarContainer>
  );
};
