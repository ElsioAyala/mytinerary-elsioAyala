import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "http://localhost:3000/api/itineraries/",
});

export const like = async (itinerary_id) => {
  let token = "";
  try {
    if (JSON.parse(localStorage.getItem("loggedAppUser")).token !== undefined) {
      token = JSON.parse(localStorage.getItem("loggedAppUser")).token;
    }
  } catch (error) {
    console.log(error.message);
  }

  try {
    const { data } = await api.put("like", itinerary_id, {
      headers: { Authorization: "Bearer " + token },
    });
    return data;
  } catch (error) {
    console.log(error.message);
    toast("To like it you must log in");
  }
};
