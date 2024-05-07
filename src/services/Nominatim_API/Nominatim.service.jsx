import axios from "axios";

const NOMINATIM_API = "https://nominatim.openstreetmap.org/search";

export const GetLongLati = async (streetName, city, state) => {
  try {
    const response = await axios.get(NOMINATIM_API, {
      params: {
        q: `${streetName}, ${city}, ${state}`,
        format: "json",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
