<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parkList: [],
};

const slice = createSlice({
  name: 'parks',
  initialState,
  reducers: {},
=======
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
};

const slice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    setParkList: (state, action) => {
      state.parkList = action.payload;
    },

    setBounds: (state, action) => {
      state.bounds = action.payload;
    },
  },
>>>>>>> frontend
});

export default slice.reducer;

// Actions
<<<<<<< HEAD
export const {} = slice.actions;
=======
export const { setParkList, setBounds } = slice.actions;
>>>>>>> frontend
