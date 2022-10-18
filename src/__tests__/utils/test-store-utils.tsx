import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { RootState, AppDispatch, store } from '@store/index';
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'
import weatherReducer from '@features/weatherDisplay/weatherDisplaySlice';
import favouriteCitiesListReducer from '@features/favouriteCitiesList/favouriteCitiesListSlice';
import { weatherApi } from '@services/weatherSvc';


// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: typeof store
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      weatherApi: undefined,
      weather: undefined,
      citiesList: undefined,
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        weather: weatherReducer,
        citiesList: favouriteCitiesListReducer,
      },
      middleware(getDefaultMiddleware) {
          return getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(weatherApi.middleware)
      },
      preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

