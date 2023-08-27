import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = citySlice.actions;
export default citySlice.reducer;
