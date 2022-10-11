import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedWeather } from "./weatherDisplaySlice";

const WeatherDisplay = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);

  useEffect(() => {
    fetch("http://localhost:3000/api/weather").then(async (response) => {
      const result = await response.json();
      dispatch(receivedWeather(result));
    });
  }, [dispatch]);

  return <div>Empty store objects {JSON.stringify(weather)}</div>;
};

export default WeatherDisplay;
