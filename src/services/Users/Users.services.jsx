import { axiosInstance } from "../../helper/axiosInstance";
import { unformatCPF } from "../../helper/cpfInstance";

export const GetUsers = async () => {
  try {
    const data = await axiosInstance
      .get("users")
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const GetEmail = async (email) => {
  try {
    const data = await axiosInstance
      .get(`users?email=${email}`)
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const GetID = async (id) => {
  try {
    const data = await axiosInstance
      .get(`/users/${id}`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const Store = async (data) => {
  await axiosInstance
    .post(`/users`, {
      name: data.name,
      age: data.age,
      cpf: unformatCPF(data.cpf),
      birth_date: data.birth_date,
      gender: data.gender,
      email: data.email,
      password: data.password,
      zipcode: data.zipcode,
      address: data.address,
      number: data.number,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
    })
    .then(async () => {
      return "Usuário cadastrado com sucesso";
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
      console.log(`Erro ao cadastrar ${err.response.data.message}`);
    });
};

export const Delete = async (id) => {
  await axiosInstance
    .delete(`/users/${id}`)
    .then(() => {
      return "Usuário removido com sucesso";
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
    });
};

export const Update = async (id, newData) => {
  const data = {
    name: newData.name,
    age: newData.age,
    cpf: unformatCPF(newData.cpf),
    birth_date: newData.birth_date,
    gender: newData.gender,
    email: newData.email,
    password: newData.password,
    zipcode: newData.zipcode,
    address: newData.address,
    number: newData.number,
    neighborhood: newData.neighborhood,
    city: newData.city,
    state: newData.state,
  };

  await axiosInstance
    .put(`/users/${id}`, data)
    .then(() => {
      return "Atualizado com sucesso";
    })
    .catch((err) => {
      console.log("err: ", err);
      console.log(`Erro ao atualizar ${err.message}`);
    });
};
