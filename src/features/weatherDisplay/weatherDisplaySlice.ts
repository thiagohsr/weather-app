import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { coordinateType, cityWeatherType } from 'common/types/weather';

export interface cityData {
  city: {
    id: number,
    name: string,
    coord: coordinateType,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
}

interface CityWeatherState {
  weather: cityWeatherType
}

const initialState: CityWeatherState = {
  weather:{
    cod: "0",
    message: 0,
    cnt: 0,
    list: [],
    city: {}
  }
}

const weatherDisplaySlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    receivedWeather(state, action: PayloadAction<cityWeatherType>) {
      state.weather = action.payload;
    }
  },
});

export const { receivedWeather } = weatherDisplaySlice.actions;
export default weatherDisplaySlice.reducer;
