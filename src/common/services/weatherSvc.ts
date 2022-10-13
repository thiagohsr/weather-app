import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_WEATHER_API_URL }),
  endpoints: (builder) => ({
    getWeatherByCoords: builder.query({
      query: ({ latitude, longitude }) => {
        return `weather?lat=${latitude}&lon=${longitude}`
      },
    }),
    getCityNameByCoords: builder.query({
      query: ({ latitude, longitude }) => {

        return `reverse?lat=${latitude}&lon=${longitude}&limit=5`;
      },
      transformResponse: ([ data ]) => {
        const {lat, lon, local_names, ...response } = data;

        return response;
      }
    }),
  }),
})
// https://api.openweathermap.org/geo/1.0/

export const {
  useGetWeatherByCoordsQuery,
  useLazyGetCityNameByCoordsQuery,
  useGetCityNameByCoordsQuery,
  useLazyGetWeatherByCoordsQuery,
} = weatherApi;
