import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bounds: { ha: null, qa: null, oa: null, pa: null },
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
  cctvList: [
    {
      id: 1,
      lat: 37.766,
      lon: 137.66,
      cnt: 1,
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

    setCCTVList: (state, action) => {
      state.cctvList = action.payload;
    },

    setBounds: (state, action) => {
      state.bounds = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setCCTVList, setParkList, setBounds } = slice.actions;
