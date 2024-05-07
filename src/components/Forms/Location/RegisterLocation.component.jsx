import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { InputComponent } from "../../Input/Input.component.jsx";
import { ButtonComponent } from "../../Button/Button.component.jsx";
import { checkBoxOptions } from "../../../helper/selectInstance.jsx";

import {
  Delete,
  Update,
  GetID,
  GetLocations,
  Store,
} from "../../../services/Locations/Locations.service.jsx";
import { ViaCEP } from "../../../services/ViaCep/ViaCep.services.jsx";
import { GetLongLati } from "../../../services/Nominatim_API/Nominatim.service.jsx";

import { AuthContext } from "../../../contexts/Auth.context.jsx";
import { ThemeContext } from "../../../contexts/Theme.context.jsx";
import { LocationContext } from "../../../contexts/Locations.context.jsx";

import * as Styled from "../Form.styles.jsx";

export const RegisterLocationComponent = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { locations, setLocations } = useContext(LocationContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      GetID(id).then((res) => {
        if (!res) {
          toast.error("Nenhum local encontrado com esse Id", {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
          navigate("/");
          return;
        } else if (res.user_id !== user.id) {
          toast.error("Você não é autorizado a editar esses dados", {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
          navigate("/");
          return;
        }
        setValue("name", res.name);
        setValue("description", res.description);
        setValue("zipcode", res.zipcode);
        setValue("neighborhood", res.neighborhood);
        setValue("city", res.city);
        setValue("state", res.state);
        setValue("latitude", res.coordinates.latitude);
        setValue("longitude", res.coordinates.longitude);
        res.sports_types.forEach((sport, index) => {
          setValue(`option${index + 1}`, sport.hasOption);
        });
      });
    }
  }, []);

  const handleCep = async () => {
    const cep = getValues("zipcode").replace(/\s+\d{5}-\d{3}$/, "");
    await ViaCEP(cep).then((data) => {
      setValue("city", data.localidade);
      setValue("state", data.uf);
      setValue("neighborhood", data.bairro);
      GetLongLati(data.logradouro, data.localidade, data.uf).then((d) => {
        setValue("longitude", d[0].lon || d.lon);
        setValue("latitude", d[0].lat || d.lat);
      });
    });
  };
  const Register = async (data) => {
    try {
      const body = { ...data, user_id: user.id };
      await Store(body);
      await GetLocations().then((res) => {
        setLocations(res);
      });
      toast.success("Local cadastrado com sucesso", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Erro ao cadastrar ${error.response.data.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      } else {
        toast.error(`Erro ao cadastrar: ${error.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  const UpdateLocal = async (data) => {
    try {
      const body = { ...data, user_id: user.id };
      await Update(id, body);
      await GetLocations().then((res) => {
        setLocations(res);
      });
      toast.success("Local editado com sucesso", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Erro ao editar ${error.response.data.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      } else {
        toast.error(`Erro ao editar: ${error.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  const DeleteLocal = async () => {
    try {
      await Delete(id);
      await GetLocations().then((res) => {
        setLocations(res);
      });
      toast.success("Local deletado com sucesso", {
        position: "bottom-right",
        theme: "colored",
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Erro ao deletar ${error.response.data.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      } else {
        toast.error(`Erro ao deletar: ${error.message}`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      <Styled.Form
        $theme={theme}
        onSubmit={handleSubmit(id ? UpdateLocal : Register)}
      >
        <Styled.FormTitle $theme={theme}>
          Preencha os campos para cadastrar a Localização
        </Styled.FormTitle>
        <Styled.FormColumn>
          <InputComponent
            id="name"
            name="name"
            type="text"
            placeholder="Digite o nome do local"
            label="Nome do Local"
            register={register("name", {
              required: "Campo obrigatório",
              maxLength: {
                value: 64,
                message: "Campo precisa ter menos de 64 caracteres",
              },
            })}
            error={!!errors.name}
            errorMessage={errors.name?.message}
          />
          <Styled.FormGrid $theme={theme}>
            {checkBoxOptions &&
              checkBoxOptions.map((option) => (
                <InputComponent
                  key={option.label}
                  id={option.label}
                  name={option.label}
                  type="checkbox"
                  label={option.label}
                  register={register(option.value)}
                />
              ))}
          </Styled.FormGrid>
          <InputComponent
            id="description"
            name="description"
            type="textarea"
            label="Descrição do Local"
            register={register("description", {
              required: "Campo obrigatório",
              maxLength: {
                value: 400,
                message: "Campo precisa ter menos de 400 caracteres",
              },
            })}
            error={!!errors.description}
            errorMessage={errors.description?.message}
          />
        </Styled.FormColumn>
        <Styled.FormRow>
          <InputComponent
            id="zipcode"
            name="zipcode"
            type="text"
            placeholder="CEP"
            label="CEP"
            cep={true}
            onClick={handleCep}
            register={{
              ...register("zipcode", {
                required: "Campo obrigatório",
                onBlur: () => handleCep(),
                maxLength: {
                  value: 9,
                  message: "Campo precisa ter até de 9 caracteres",
                },
                minLength: {
                  value: 8,
                  message: "Campo precisa ter até de 8 caracteres",
                },
              }),
            }}
            error={!!errors.zipcode}
            errorMessage={errors.zipcode?.message}
          />
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
          <InputComponent
            id="longitude"
            name="longitude"
            type="text"
            placeholder="Longitude"
            register={{
              ...register("longitude", {
                required: "Campo obrigatório",
              }),
            }}
            error={!!errors.longitude}
            errorMessage={errors.longitude?.message}
          />
          <InputComponent
            id="latitude"
            name="latitude"
            type="text"
            placeholder="Latitude"
            register={{
              ...register("latitude", {
                required: "Campo obrigatório",
              }),
            }}
            error={!!errors.latitude}
            errorMessage={errors.latitude?.message}
          />
        </Styled.FormRow>
        <Styled.ButtonWrapper>
          {id ? (
            <>
              <ButtonComponent
                type="button"
                text="Deletar"
                preset="delete"
                onClick={DeleteLocal}
                variant="outlined"
              />
              <ButtonComponent
                type="submit"
                text="Editar"
                preset="edit"
                variant="outlined"
              />
            </>
          ) : (
            <ButtonComponent
              type="submit"
              text="Cadastrar"
              preset="save"
              variant="outlined"
            />
          )}
        </Styled.ButtonWrapper>
      </Styled.Form>
    </>
  );
};
