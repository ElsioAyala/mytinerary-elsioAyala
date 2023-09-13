import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signup, userAuthenticate, userLogout } from "../services/userQueries";

export const signUp = createAsyncThunk("user/signUp", async (input) => {
  const response = await signup(input);
  return response;
});

export const signIn = createAsyncThunk("user/signIn", async (input) => {
  const response = await signin(input);
  localStorage.setItem("loggedAppUser", JSON.stringify(response));

  return response;
});

export const authenticate = createAsyncThunk("user/authenticate", async () => {
  try {
    let token = JSON.parse(localStorage.getItem("loggedAppUser")).token;
    const response = await userAuthenticate(token);
    return response;
  } catch (error) {
    console.log(error.message);
  }
});

export const signOut = createAsyncThunk("user/signOut", async () => {
  try {
    let token = JSON.parse(localStorage.getItem("loggedAppUser")).token;
    const response = await userLogout(token);
    if (response !== undefined) {
      localStorage.removeItem("loggedAppUser");
    }
    return response;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  user: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, () => {}),
      builder.addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = true;
      }),
      builder.addCase(authenticate.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.user = action.payload.user;
          state.isLogin = true;
        }
      }),
      builder.addCase(signOut.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.user = {};
          state.isLogin = false;
        }
      });
  },
});

export default userSlice.reducer;
