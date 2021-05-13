import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bounds: { ha: null, qa: null, oa: null, pa: null },
};

const slice = createSlice({
  name: "parks",
  initialState,
  reducers: {
    setBounds: (state, action) => {
      state.bounds = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setBounds } = slice.actions;
