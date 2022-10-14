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
    getWeatherByName: builder.query({
      query: ({ searchTerm }) => {
        return `weatherByName?searchTerm=${searchTerm}`
      },
      // transformResponse: (data:any) => {
      //   const { list } = data;
      //   const adaptedList = list?.map((item:any) => ({
      //     ...item,
      //     label: `${item?.name} | ${item?.sys?.country}`
      //   }))

      //   console.log('adaptedList::Called ', adaptedList);

      //   return {
      //     ...data,
      //     list: adaptedList,
      //   };
      // }
    }),
  }),
})

export const {
  useGetWeatherByCoordsQuery,
  useLazyGetCityNameByCoordsQuery,
  useGetCityNameByCoordsQuery,
  useLazyGetWeatherByCoordsQuery,
  useGetWeatherByNameQuery,
  useLazyGetWeatherByNameQuery,
} = weatherApi;
