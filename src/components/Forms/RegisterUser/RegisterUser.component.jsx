import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../../contexts/Login.context.jsx";
import { ThemeContext } from "../../../contexts/Theme.context.jsx";
import * as Styled from "../Form.styles.jsx";
import { InputComponent } from "../../Input/Input.component.jsx";
import { SelectComponent } from "../../Select/Select.component.jsx";
import { selectGender } from "../../../helper/selectInstance.jsx";
import { ViaCEP } from "../../../services/ViaCep/ViaCep.services.jsx";
import { ButtonComponent } from "../../Button/Button.component.jsx";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const RegisterUser = () => {
  const { theme } = useContext(ThemeContext);
  const { showLogin } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  {
    /*Nome
  Sexo
  CPF
  Data de Nascimento
  E-mail
  Senha
  Endereço (usar ViaCEP)
*/
  }

  const handleCep = async () => {
    await ViaCEP(watch("zipcode")).then((data) => {
      console.log(data);
      setValue("city", data.localidade);
      setValue("state", data.uf);
      setValue("address", data.logradouro);
      setValue("neighborhood", data.bairro);
    });
  };

  const test = () => {
    console.log("test");
  };
  return (
    <>
      <Styled.Form $theme={theme} onSubmit={handleSubmit(test)}>
        <Styled.FormTitle $theme={theme}>
          Preencha os campos para cadastrar o Usuario
        </Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormRow>
            <InputComponent
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              label="Nome Completo"
              register={{
                ...register("name", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 4,
                    message: "Campo precisa ter acima de 4 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo precisa ter menos de 64 caracteres",
                  },
                }),
              }}
              error={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <SelectComponent
              id={"gender"}
              label={"Gênero"}
              error={!!errors.gender}
              helperText={errors.gender?.message}
              option={selectGender}
              register={{
                ...register("gender", { required: "Selecione uma das opções" }),
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
                  maxLength: {
                    value: 14,
                    message: "Campo precisa ter 14 caracteres",
                  },
                  pattern: {
                    value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                    message: "CPF precisa seguir o formato de xxx.xxx.xxx-xx",
                  },
                }),
              }}
              error={!!errors.cpf}
              errorMessage={errors.cpf?.message}
            />
            <InputComponent
              id="birthday"
              name="birthday"
              type="date"
              register={{
                ...register("birthday", { required: "Campo obrigatório" }),
              }}
              error={!!errors.birthday}
              errorMessage={errors.birthday?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
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
          <Styled.FormRow>
            
              <InputComponent
                id="zipcode"
                name="zipcode"
                type="text"
                placeholder="CEP"
                label="CEP"
                register={{
                  ...register("zipcode", {
                    required: "Campo obrigatório",
                    maxLength: {
                      value: 8,
                      message: "Campo precisa ter até de 8 caracteres",
                    },
                    minLength: {
                      value: 8,
                      message: "Campo precisa ter até de 8 caracteres",
                    },
                  }),
                }}
                error={!!errors.zipcode}
                errorMessage={errors.zipcode?.message}
              >
                <SearchOutlinedIcon />
              </InputComponent>
            <InputComponent
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
              readOnly={true}
              register={{
                ...register("city", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.city}
              errorMessage={errors.city?.message}
            />
            <InputComponent
              id="state"
              name="state"
              type="text"
              placeholder="Estado"
              readOnly={true}
              register={{
                ...register("state", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.state}
              errorMessage={errors.state?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="address"
              name="address"
              type="text"
              placeholder="Logradouro"
              readOnly={true}
              register={{
                ...register("address", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.address}
              errorMessage={errors.address?.message}
            />

            <InputComponent
              id="number"
              name="number"
              type="text"
              placeholder="Número"
              register={{
                ...register("number"),
              }}
              error={!!errors.number}
              errorMessage={errors.number?.message}
            />

            <InputComponent
              id="neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              readOnly={true}
              register={{
                ...register("neighborhood", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.neighborhood}
              errorMessage={errors.neighborhood?.message}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.ButtonWrapper>
          <ButtonComponent
            type={"button"}
            text={"Editar"}
            preset={"edit"}
            variant={"outlined"}
            disabled={true}
          />
          <ButtonComponent
            type={"button"}
            text={"Deletar"}
            preset={"delete"}
            variant={"outlined"}
            disabled={true}
          />
          <ButtonComponent
            type={"submit"}
            text={"Salvar"}
            preset={"save"}
            variant={"outlined"}
          />

          <Styled.FormLegend $theme={theme} onClick={showLogin}>
            Voltar para o login?
          </Styled.FormLegend>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </>
  );
};
