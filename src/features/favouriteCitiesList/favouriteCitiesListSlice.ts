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
  },
});

export const { addCity } = favouriteCitiesListSlice.actions;
export default favouriteCitiesListSlice.reducer;
