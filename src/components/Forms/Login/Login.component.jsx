import { useForm } from "react-hook-form";
import { useContext } from "react";

import { InputComponent } from "../../Input/Input.component.jsx";
import { ButtonComponent } from "../../Button/Button.component.jsx";

import { LoginContext } from "../../../contexts/Login.context.jsx";
import { AuthContext } from "../../../contexts/Auth.context.jsx";
import { ThemeContext } from "../../../contexts/Theme.context.jsx";

import * as Styled from "../Form.styles.jsx";

export const LoginComponent = () => {
  const { theme } = useContext(ThemeContext);
  const { showRegister } = useContext(LoginContext);
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Styled.LoginForm $theme={theme} onSubmit={handleSubmit(login)}>
        <Styled.FormColumn>
          <Styled.FormTitle $theme={theme}>Login</Styled.FormTitle>
        </Styled.FormColumn>

        <Styled.FormColumn>
          <InputComponent
            id="email"
            name="email"
            label="Digite seu e-mail"
            type="email"
            register={{
              ...register("email", {
                required: true,
                validate: {
                  matchPath: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                },
              }),
            }}
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />

          <InputComponent
            id="password"
            label="Digite sua senha"
            type="password"
            name="password"
            register={{
              ...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Campo precisa ter acima de 8 caracteres",
                },
              }),
            }}
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </Styled.FormColumn>
        <Styled.FormColumn>
          <Styled.ButtonWrapper>
            <ButtonComponent type={"submit"} text={"Login"} preset={"save"} />
            <ButtonComponent
              type={"button"}
              text={"Criar conta"}
              onClick={showRegister}
            />
          </Styled.ButtonWrapper>
          <Styled.StyledLink $theme={theme} to={"/"}>
            Voltar para a Pagina Principal?
          </Styled.StyledLink>
        </Styled.FormColumn>
      </Styled.LoginForm>
    </>
  );
};
