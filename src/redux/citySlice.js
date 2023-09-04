import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCities, getCityById } from "../services/cityQueries";

export const getAllCities = createAsyncThunk("city/getAllCities", async () => {
  const response = await getCities();
  return response;
});
export const searchCities = createAsyncThunk("city/searchCities", async (param) => {
  const response = await getCities(param);
  return response;
});
export const getCity = createAsyncThunk("city/getCity", async (id) => {
  const response = await getCityById(id);
  return response;
});

const initialState = {
  cities: [],
  city: {},
  isLoading: true,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
        state.city = {};
      })
      .addCase(searchCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
      })
      .addCase(getCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.city = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setCities } = citySlice.actions;
export default citySlice.reducer;
