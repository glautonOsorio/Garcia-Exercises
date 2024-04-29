import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../../contexts/Login.context.jsx";
import { ThemeContext } from "../../../contexts/Theme.context.jsx";
import * as Styled from "../Form.styles.jsx";
import { InputComponent } from "../../Input/Input.component.jsx";
import { SelectComponent } from "../../Select/Select.component.jsx";
import Button from "@mui/material/Button";

export const RegisterUser = () => {
  const { theme } = useContext(ThemeContext);
  const { showLogin } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const selectGender = [
    { value: "", label: "Selecione" },
    { value: "male", label: "Masculino" },
    { value: "female", label: "Feminino" },
    { value: "other", label: "Outro" },
  ];
  const selectType = [
    { value: "", label: "Selecione" },
    { value: "admin", label: "Administrador" },
    { value: "medic", label: "Medico(a)" },
    { value: "nurse", label: "Enfermeiro(a)" },
  ];

  const test = () => {
    console.log("test");
  };
  return (
    <>
      <Styled.Form $theme={theme} onSubmit={handleSubmit(test)}>
        <Styled.FormTitle $theme={theme}>
          Preencha os campos para cadastrar
        </Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle $theme={theme}>
            Cadastre um Usuario
          </Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Digite seu nome"
              label="Nome Completo"
              register={{
                ...register("fullName", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo precisa ter menos de 64 caracteres",
                  },
                }),
              }}
              error={!!errors.fullName}
              errorMessage={errors.fullName?.message}
            />
            <SelectComponent
              id={"gender"}
              label={"Gênero"}
              error={!!errors.gender}
              errorMessage={errors.gender?.message}
              option={selectGender}
              register={{
                ...register("gender", { required: "Selecione uma das opções" }),
              }}
            />
            <SelectComponent
              id={"type"}
              name="type"
              label={"Tipo de Usuario"}
              error={!!errors.type}
              errorMessage={errors.type?.message}
              option={selectType}
              register={{
                ...register("type", {
                  required: "Selecione uma das opções",
                }),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="cpf"
              type="text"
              label="CPF"
              placeholder="Digite seu CPF"
              register={{
                ...register("cpf", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 11,
                    message: "Campo precisa ter acima de 11 caracteres",
                  },
                  maxLength: {
                    value: 14,
                    message: "Campo precisa ter menos de 14 caracteres",
                  },
                }),
              }}
              error={!!errors.cpf}
              errorMessage={errors.cpf?.message}
            />

            <InputComponent
              id="phoneNumber"
              type="text"
              label="Telefone"
              placeholder="Digite seu telefone"
              register={{
                ...register("phoneNumber", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                  maxLength: {
                    value: 11,
                    message: "Campo precisa ter menos de 11 caracteres",
                  },
                }),
              }}
              error={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber?.message}
            />
          </Styled.FormRow>
          <InputComponent
            id="email"
            type="email"
            placeholder="Digite seu email"
            label="email"
            register={{
              ...register("email", {
                required: "Campo obrigatório",
                validate: {
                  matchPath: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                },
              }),
            }}
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <Styled.FormRow>
            <InputComponent
              id="password"
              type="password"
              label="Senha"
              placeholder="Digite uma senha"
              register={{
                ...register("password", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Campo precisa ter acima de 6 caracteres",
                  },
                }),
              }}
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <InputComponent
              id="passwordVerify"
              type="password"
              label="Confirma senha"
              placeholder="Digite a mesma senha"
              register={{
                ...register("passwordVerify", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Campo precisa ter acima de 6 caracteres",
                  },
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "As senhas estão diferentes";
                    }
                  },
                }),
              }}
              error={!!errors.passwordVerify}
              errorMessage={errors.passwordVerify?.message}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.ButtonWrapper>
          <Button variant="outlined" type="button" disabled={disabled}>
            Editar
          </Button>
          <Button variant="outlined" disabled={disabled}>
            Deletar
          </Button>
          <Button variant="outlined" type="submit">
            Salvar
          </Button>
          <Styled.FormLegend $theme={theme} onClick={showLogin}>
            Voltar para o login?
          </Styled.FormLegend>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </>
  );
};
