import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../../../contexts/Theme.context.jsx";
import * as Styled from "../Form.styles.jsx";
import { InputComponent } from "../../Input/Input.component.jsx";
import { LoginContext } from "../../../contexts/Login.context.jsx";

export const LoginComponent = () => {
  const { theme } = useContext(ThemeContext);
  const { showRegister } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const test = () => {
    console.log("test");
  };
  return (
    <>
      <Styled.LoginForm $theme={theme} onSubmit={handleSubmit(test)}>
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
            <button type="submit">Login</button>
            <button type="button" onClick={showRegister}>
              Criar Conta
            </button>
          </Styled.ButtonWrapper>

          <Styled.FormLegend $theme={theme} href="#">
            Esqueceu sua senha?
          </Styled.FormLegend>
        </Styled.FormColumn>
      </Styled.LoginForm>
    </>
  );
};
