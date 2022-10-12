import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedWeather } from "./weatherDisplaySlice";
import { useGetWeatherByCoordsQuery } from "common/services/weatherSvc";

const WeatherDisplay = () => {
  const dispatch = useAppDispatch();
  const { weather } = useAppSelector((state) => state.weather);
  const { isLoading, data } = useGetWeatherByCoordsQuery(null);
  
  useEffect(() => {
    dispatch(receivedWeather(data));
  }, [data, dispatch]);

  if (isLoading) {
    return <>Weather is Loading!</>
  }

  return (
    <>
      <div>From RTKQuery? {JSON.stringify(data, null, 2)}</div>
      <p>Queries</p>
      <div>FromSlice? {JSON.stringify(weather, null, 2)}</div>
    </>
  )
};

export default WeatherDisplay;
