import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  cities: {}
}

const favouriteCitiesListSlice = createSlice({
  name: 'citiesList',
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<any>) {
      console.log('addCity::called', action.payload);
      state.cities = {
        ...state.cities,
        ...{ [action.payload.key]: action.payload },
      };
    },
    removeCity(state, action: PayloadAction<any>) {
      const { cityKey } = action.payload;
      
      delete state.cities[`${cityKey}`];
      console.log(JSON.stringify(state.cities), 'addCity::called', cityKey);
      state.cities = {
        ...state.cities,
      };
    }
  },
});

export const { addCity, removeCity } = favouriteCitiesListSlice.actions;
export default favouriteCitiesListSlice.reducer;
