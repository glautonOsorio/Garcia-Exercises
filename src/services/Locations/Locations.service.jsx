import { axiosInstance } from "../../helper/axiosInstance";

export const GetLocations = async () => {
  try {
    const data = await axiosInstance
      .get("locations")
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
      .get(`locations/${id}`)
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
    .post(`locations`, {
      user_id: data.user_id,
      name: data.name,
      description: data.description,
      location: data.location,
      coordinates: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      sports_types: data.sports_types.map((sport) => ({
        type: sport.type,
      })),
    })
    .then(async () => {
      alert("Local cadastrado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
      alert(`Erro ao cadastrar ${err.response.data.message}`);
    });
};

export const Delete = async (id) => {
  await axiosInstance
    .delete(`locations/${id}`)
    .then(() => {
      alert("Local removido com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
    });
};

export const Update = async (id, newData) => {
  const data = {
    user_id: newData.user_id,
    name: newData.name,
    description: newData.location,
    coordinates: {
      latitude: newData.latitude,
      longitude: newData.longitude,
    },
    sports_types: newData.sports_types.map((sport) => ({
      type: sport.type,
    })),
  };

  await axiosInstance
    .put(`locations/${id}`, data)
    .then(() => {
      alert("Atualizado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err);
      alert(`Erro ao atualizar ${err.message}`);
    });
};
