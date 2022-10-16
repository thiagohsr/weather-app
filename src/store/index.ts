import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

import weatherReducer from '@features/weatherDisplay/weatherDisplaySlice';
import favouriteCitiesListReducer from '@features/favouriteCitiesList/favouriteCitiesListSlice';
import { weatherApi } from 'common/services/weatherSvc';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['weather', 'weatherApi'],
  stateReconcilier: autoMergeLevel1,
}

const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  weather: weatherReducer,
  citiesList: favouriteCitiesListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }).concat(weatherApi.middleware)
  },
})

export const persistedStore = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;