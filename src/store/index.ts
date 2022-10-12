import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import weatherReducer from '@features/weatherDisplay/weatherDisplaySlice';
import { weatherApi } from 'common/services/weatherSvc';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: weatherReducer,
  },
  middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(weatherApi.middleware)
  },
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;