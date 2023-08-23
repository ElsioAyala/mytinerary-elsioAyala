import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const getCities = async (queryParam = "") => {
  try {
    const { data } = await api.get("cities" + queryParam);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCityById = async (id) => {
  try {
    const { data } = await api.get("cities/" + id);
    return data;
  } catch (err) {
    console.log(err);
  }
};
