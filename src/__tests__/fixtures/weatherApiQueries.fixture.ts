import { currentWeather } from './currentWeather.fixture';
export const queries = {
  'getCityNameByCoords({"latitude":-23.4773,"longitude":-46.6223})': {
    status: "fulfilled",
    endpointName: "getCityNameByCoords",
    requestId: "LgtFRl815xj0EOFbxUuo_",
    originalArgs: {
      latitude: -23.4773,
      longitude: -46.6223,
    },
    startedTimeStamp: 1666097462086,
    data: {
      name: "São Paulo",
      country: "BR",
      state: "São Paulo",
    },
    fulfilledTimeStamp: 1666097463253,
  },
  'getWeatherByCoords({"latitude":-23.4773,"longitude":-46.6223})': {
    data: {
      lat: -23.4773,
      lon: -46.6223,
      ...currentWeather.weather.weather
    },
    status: "pending",
    endpointName: "getWeatherByCoords",
    requestId: "6Xzc-I00rMUYXsQ5K6IHn",
    originalArgs: { latitude: -23.4773, longitude: -46.6223 },
    startedTimeStamp: 1666092497811,
  },
}
