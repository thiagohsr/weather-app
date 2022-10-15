import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { cityWeatherType, cityType } from 'common/types/weather';

interface CityWeatherState extends cityType {
  weather: cityWeatherType
  forecast: any
}

const initialState: CityWeatherState = {
  weather:{
    cod: "0",
    message: 0,
    cnt: 0,
    list: [],
    city: {},
  },
  forecast: [],
  id: 0,
  name: undefined,
  coord: { lat: undefined, lon: undefined},
  country: undefined,
  population: 0,
  timezone: 0,
  sunrise: 0,
  sunset: 0
}

const weatherDisplaySlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    receivedWeather(state, action: PayloadAction<cityWeatherType>) {
      state.weather = action.payload;
    },
    receivedForecast(state, action: PayloadAction<any>) {
      state.forecast = action.payload;
    }
  },
});

export const { receivedWeather, receivedForecast } = weatherDisplaySlice.actions;
export default weatherDisplaySlice.reducer;
