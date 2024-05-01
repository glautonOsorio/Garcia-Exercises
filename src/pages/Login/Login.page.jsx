import { useContext } from "react";
import * as Styled from "./Login.styles";
import { LoginComponent } from "../../components/Forms/Login/Login.component";
import { RegisterUser } from "../../components/Forms/RegisterUser/RegisterUser.component";
import { LoginContext } from "../../contexts/Login.context.jsx";
import { ThemeContext } from "../../contexts/Theme.context.jsx";

export const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(LoginContext);
  console.log(theme);

  return (
    <Styled.LoginPage $theme={theme}>
      {login ? (
        <>
          <Styled.BackgroundImage>
            <Styled.Images src="/undraw_relaxing_walk_re_7fko.svg" alt="" />
          </Styled.BackgroundImage>
          <LoginComponent />
        </>
      ) : (
        <RegisterUser />
      )}
    </Styled.LoginPage>
  );
};
