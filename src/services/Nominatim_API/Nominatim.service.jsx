import axios from "axios";

const NOMINATIM_API = "https://nominatim.openstreetmap.org/search";

export const getAddressByStreet = async (streetName, state, country) => {
  try {
    const response = await axios.get(NOMINATIM_API, {
      params: {
        q: streetName,
        state: state,
        country: country,
        format: "json",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
