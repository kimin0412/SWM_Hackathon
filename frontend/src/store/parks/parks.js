import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parkList: [],
};

const slice = createSlice({
  name: 'parks',
  initialState,
  reducers: {},
});

export default slice.reducer;

// Actions
export const {} = slice.actions;
