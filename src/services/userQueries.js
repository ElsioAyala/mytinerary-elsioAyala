import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "https://mytinerary-back-ayalaelsio-dh0q-dev.fl0.io/api/users/",
});

/*export const signup = async (input) => {
  try {
    const { data } = await api.post("signup", input);
    toast.success(data.message);
    return data;
  } catch (err) {
    const data = err.response.data.message;
    if (Array.isArray(data)) {
      data.forEach((message) => {
        toast.error(message);
      });
    } else {
      toast.error(data);
    }
  }
};*/

export const signup = async (input) => {
  const promise = api.post("signup", input);
  toast.promise(promise, {
    pending: "Loading...",
    success: (response) => response.data.message,
    error: (error) => {
      const data = error.response.data.message;
      if (Array.isArray(data)) {
        const text = data.join(",  ");
        console.log(text);
        return text;
      } else {
        console.log(data);
        return data;
      }
    },
  });

  return promise.then((response) => response.data.message);
};

/*export const signin = async (input) => {
  try {
    const { data } = await api.post("signin", input);
    return data;
  } catch (err) {
    const data = err.response.data.message;
    if (Array.isArray(data)) {
      data.forEach((message) => {
        console.log(message);
      });
    } else {
      console.log(data);
    }
  }
};*/

export const signin = async (input) => {
  const promise = api.post("signin", input);

  toast.promise(promise, {
    pending: "Loading...",
    success: (response) => response.data.message,
    error: (error) => {
      const data = error.response.data.message;
      if (Array.isArray(data)) {
        const text = data.join(",  ");
        return text;
      } else {
        return data;
      }
    },
  });
  return promise.then((response) => response.data);
};

export const userAuthenticate = async (token) => {
  try {
    const { data } = await api.post("authenticated", null, {
      headers: { Authorization: "Bearer " + token },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const userLogout = async (token) => {
  try {
    const { data } = await api.post("signout", null, {
      headers: { Authorization: "Bearer " + token },
    });
    if (data !== undefined) toast.success(data.message);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
