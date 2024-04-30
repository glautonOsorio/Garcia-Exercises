import { useContext } from "react";
import * as Styled from "./Login.styles";
import { LoginComponent } from "../../components/Forms/Login/Login.component";
import { RegisterUser } from "../../components/Forms/RegisterUser/RegisterUser.component";
import { ThemeContext } from "../../contexts/Theme.context";
import { LoginContext } from "../../contexts/Login.context.jsx";

export const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(LoginContext);
  console.log(login);

  return (
    <Styled.LoginPage $theme={theme}>
      <Styled.BackgroundImage>
        <Styled.Images src="/undraw_relaxing_walk_re_7fko.svg" alt="" />
      </Styled.BackgroundImage>
      {login ? <LoginComponent /> : <RegisterUser />}
    </Styled.LoginPage>
  );
};
