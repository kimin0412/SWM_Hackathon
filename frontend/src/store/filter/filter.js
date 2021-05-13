import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    light: false,
    nearbyLight: 3,

    cctv: false,
    nearbyCCTV: 3,

    air: false,
    aqi: 50,
    pm10: 50,
    pm25: 50,

    climate: false,
    sun: true,
    rain: true,
    snow: true,
    temperature: [7, 21],
    precipitation: 40,
    humidity: 50,
  },
  reducers: {
    applyLight: (state) => {
      state.light = !state.light;
    },
    setNearybyLight: (state, action) => {
      state.nearbyLight = action.payload;
    },

    applyCCTV: (state) => {
      state.cctv = !state.cctv;
    },
    setNearbyCCTV: (state, action) => {
      state.nearbyCCTV = action.payload;
    },

    applyAir: (state) => {
      state.air = !state.air;
    },
    setAQI: (state, action) => {
      state.aqi = action.payload;
    },
    setPm10: (state, action) => {
      state.pm10 = action.payload;
    },
    setPm25: (state, action) => {
      state.pm25 = action.payload;
    },

    applyClimate: (state) => {
      state.climate = !state.climate;
    },
    setSun: (state) => {
      state.sun = !state.sun;
    },
    setRain: (state) => {
      state.rain = !state.rain;
    },
    setSnow: (state) => {
      state.snow = !state.snow;
    },
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    setPrecipitation: (state, action) => {
      state.precipitation = action.payload;
    },
    setHumidity: (state, action) => {
      state.humidity = action.payload;
    },
  },
});

export const {
  applyLight,
  setNearybyLight,
  applyCCTV,
  setNearbyCCTV,
  applyAir,
  setAQI,
  setPm10,
  setPm25,
  applyClimate,
  setSun,
  setRain,
  setSnow,
  setTemperature,
  setPrecipitation,
  setHumidity,
} = filterSlice.actions;

export default filterSlice.reducer;
