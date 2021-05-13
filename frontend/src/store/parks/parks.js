import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parkList: [
    {
      id: 0,
      lat: 135.55,
      lon: 77.77,
      area: 500,
      name: "Dummy",
      park_type: "Kids",
      cctv_cnt: 5,
      streatlamp: 2,
      location: "South Korea",
    },
  ],
};

const slice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    setParkList: (state, action) => {
      state.parkList = action.payload;
    },
  },
});

export default slice.reducer;

// Actions
export const { setParkList } = slice.actions;
