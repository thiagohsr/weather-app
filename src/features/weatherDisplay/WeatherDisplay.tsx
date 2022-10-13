import {
  useGetWeatherByCoordsQuery,
  useGetCityNameByCoordsQuery,
} from "common/services/weatherSvc";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedWeather } from "./weatherDisplaySlice";
import GeolocationCoordinates from "@hooks/geolocation";
import { useEffect } from "react";

const WeatherDisplay = () => {
  const dispatch = useAppDispatch();
  const { weather } = useAppSelector((state) => state.weather);
  const coordinates = GeolocationCoordinates();
  const latitude = Number(coordinates?.coords?.latitude?.toFixed(4));
  const longitude = Number(coordinates?.coords?.longitude?.toFixed(4));

  const { isLoading, data } = useGetWeatherByCoordsQuery(
    {
      latitude,
      longitude,
    },
    { skip: latitude === 0 && longitude === 0}
  );

  useEffect(() => {
    // if (!weather?.daily.length) {
    //   dispatch(receivedWeather(data));
    // };
  }, [data, dispatch, weather]);

  // const { isLoading: isLoadingCity, data: dataCity } = useGetCityNameByCoordsQuery({
  //   latitude,
  //   longitude
  // }, { skip: !latitude && !longitude });

  if (isLoading && !weather) {
    return <>Weather is Loading!</>;
  }

  return (
    <>
      <div>From RTKQuery? {JSON.stringify(data, null, 2)}</div>
      {/* <div>City From RTKQuery? {JSON.stringify(dataCity, null, 2)}</div> */}
    </>
  );
};

export default WeatherDisplay;
