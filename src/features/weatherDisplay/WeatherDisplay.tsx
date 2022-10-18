import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  useGetWeatherByCoordsQuery,
  useGetCityNameByCoordsQuery,
} from "@services/weatherSvc";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedForecast } from "./weatherDisplaySlice";
import { addCity } from "@features/favouriteCitiesList/favouriteCitiesListSlice";
import GeolocationCoordinates from "@hooks/geolocation";

import DefaultLoader from "@components/DefaultLoader";
import CurrentWeather from "@components/CurrentWeather";
import ForecastList from "@components/ForecastList";
import { WeatherDisplayHolder, AddToListButton } from './WeatherDisplay.style';

const WeatherDisplay = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cities } = useAppSelector((state) => state.citiesList);
  const { weather } = useAppSelector((state) => state.weather);
  const { forecast } = useAppSelector((state) => state.weather);
  const coordinates = GeolocationCoordinates();
  const latitude = weather?.coord?.lat || Number(coordinates?.coords?.latitude?.toFixed(4));
  const longitude = weather?.coord?.lon || Number(coordinates?.coords?.longitude?.toFixed(4));

  const { isLoading, data } = useGetWeatherByCoordsQuery(
    {
      latitude,
      longitude,
    },
    { skip: latitude === 0 && longitude === 0}
  );

  useEffect(() => {
    if (!weather?.daily?.length) {
      dispatch(receivedForecast(data));
    };
  }, [data, dispatch, weather]);
  
  const handleAddToList = () => {
    /* cases: 
    When have dataCity (from search result)
    When do not have dataCity (when first load)
    */
    const addCityPayload = {
      name: weather.name || dataCity?.name,
      country: weather?.sys?.country || dataCity?.country ,
      key: `${forecast?.lat}${forecast?.lon}`,
        lat: forecast?.lat,
        lon: forecast?.lon,
    }
    dispatch(addCity(addCityPayload));
  }
  
  
  const { isLoading: isLoadingCity, data: dataCity } = useGetCityNameByCoordsQuery({
    latitude,
    longitude
  }, { skip: !latitude && !longitude });
  
  if (isLoadingCity || isLoading || (!forecast?.current)) {
    return <><DefaultLoader /></>;
  }

  const alreadyInList = !!cities[`${forecast?.lat}${forecast?.lon}`];

  return (
    <>
      <WeatherDisplayHolder>
        <AddToListButton
          title={ alreadyInList ? `Added to list` : `Add to list` }
          alreadyInList={alreadyInList}
          onClick={alreadyInList ?
            () => { router.push({ pathname: '/citiesList' }) } :
            handleAddToList
          }>{ alreadyInList ? `Added to list` : `Add to list` }
        </AddToListButton>
        <CurrentWeather {...{ weather, dataCity, forecast} } />
      </WeatherDisplayHolder>
      <ForecastList { ...{ forecast } }/>
    </>
  );
};

export default WeatherDisplay;
