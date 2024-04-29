import { useContext } from "react";
import * as Styled from "./Login.styles";
import { ThemeContext } from "../contexts/Theme.context";
import { LoginComponent } from "../components/Forms/Login/Login.component";
import { RegisterUser } from "../components/Forms/RegisterUser/RegisterUser.component";
import { LoginContext } from "../contexts/Login.context";

export const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(LoginContext); // Only need login from LoginContext

  return (
    <Styled.LoginPage $theme={theme}>
      <Styled.BackgroundImage>
        <Styled.Images src="/undraw_relaxing_walk_re_7fko.svg" alt="" />
      </Styled.BackgroundImage>
      {login ? <LoginComponent /> : <RegisterUser />}
    </Styled.LoginPage>
  );
};
