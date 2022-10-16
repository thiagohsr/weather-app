import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  cities: {}
}

const favouriteCitiesListSlice = createSlice({
  name: 'citiesList',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<any>) {
      state.cities = {
        ...{ [action.payload.key]: action.payload },
        ...state.cities,
      };
    },
    removeCity(state, action: PayloadAction<any>) {
      const { cityKey } = action.payload;
      delete state.cities[`${cityKey}`];
      state.cities = {
        ...state.cities,
      };
    }
  },
});

export const { addCity, removeCity } = favouriteCitiesListSlice.actions;
export default favouriteCitiesListSlice.reducer;
