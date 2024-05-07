import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../../contexts/Login.context";
import { AuthContext } from "../../contexts/Auth.context.jsx";
import { ThemeContext } from "../../contexts/Theme.context.jsx";

import LoginIcon from "@mui/icons-material/Login";
import HikingIcon from "@mui/icons-material/Hiking";
import ContrastIcon from "@mui/icons-material/Contrast";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

import * as Styled from "./Header.styles";

export function HeaderComponent() {
  const { showRegister } = useContext(LoginContext);
  const { user } = useContext(AuthContext);

  const { theme, changeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const toRegister = () => {
    showRegister();
    navigate("/login");
  };

  return (
    <Styled.HeaderContainer $theme={theme}>
      <Styled.HeaderTextContent>
        <Styled.HeaderTitle
          onClick={() => {
            navigate("/");
          }}
          $theme={theme}
        >
          Garcia Exercises <HikingIcon fontSize="large" />
        </Styled.HeaderTitle>
      </Styled.HeaderTextContent>

      <Styled.HeaderTextContent>
        <Styled.HeaderColumm onClick={changeTheme} $theme={theme}>
          <ContrastIcon />
          <Styled.HeaderSpan $theme={theme}>Mudar tema</Styled.HeaderSpan>
        </Styled.HeaderColumm>

        {user ? (
          <>
            {user.gender === "Male" ? (
              <Styled.HeaderColumm>
                <Styled.LoggedIconMan $theme={theme} />
                <Styled.HeaderSpan $theme={theme}>
                  {user.name}
                </Styled.HeaderSpan>
              </Styled.HeaderColumm>
            ) : (
              <Styled.HeaderColumm>
                <Styled.LoggedIconWoman $theme={theme} />
                <Styled.HeaderSpan $theme={theme}>
                  {user.name}
                </Styled.HeaderSpan>
              </Styled.HeaderColumm>
            )}
          </>
        ) : (
          <>
            <Styled.StyledLink to="/login" $theme={theme}>
              Fazer Login <LoginIcon fontSize="large" />
            </Styled.StyledLink>
            <Styled.StyledLink $theme={theme} onClick={toRegister}>
              Cadastrar <AppRegistrationIcon fontSize="large" />
            </Styled.StyledLink>
          </>
        )}
      </Styled.HeaderTextContent>
    </Styled.HeaderContainer>
  );
}
