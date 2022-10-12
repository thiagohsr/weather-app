import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/'}),
  endpoints: (builder) => ({
    getWeatherByCoords: builder.query({
      query: () => `weather`,
    }),
  }),
})

export const { useGetWeatherByCoordsQuery } = weatherApi;
