import { useEffect } from "react";
import {
  useGetWeatherByCoordsQuery,
  useGetCityNameByCoordsQuery,
} from "@services/weatherSvc";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedForecast } from "./weatherDisplaySlice";
import { addCity } from "@features/favouriteCitiesList/favouriteCitiesListSlice";
import GeolocationCoordinates from "@hooks/geolocation";

import Grid from "styled-components-grid";
import {
  ForecastHolder,
} from "@styles/sharedStyles";
import CurrentWeather from "@components/CurrentWeather";
import ForecastList from "@components/ForecastList";

import IconLoaderStyled from "@common/components/WeatherIconLoader";

const WeatherDisplay = () => {
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
    ...dataCity,
      key: `${forecast?.lat}${forecast?.lon}`,
      lat: forecast?.lat,
      lon: forecast?.lon,
    }
    console.log('Add to list::dataCity ', addCityPayload);
    dispatch(addCity(addCityPayload));
    // const cityWeather = useGetWeatherByNameQuery(dataCity?.name);
  }

  const { isLoading: isLoadingCity, data: dataCity } = useGetCityNameByCoordsQuery({
    latitude,
    longitude
  }, { skip: !latitude && !longitude });

  if (isLoadingCity || isLoading || (!forecast?.current)) {
    return <>Weather is Loading!</>;
  }

  const alreadyInList = !!cities[`${forecast?.lat}${forecast?.lon}`];

  return (
    <>
      <button
        onClick={alreadyInList ?
          () => { console.log('navigate::ToList ', forecast, weather, dataCity)} :
          handleAddToList
        }>{ alreadyInList ? `City Already in list` : `Add city` }
      </button>
      <CurrentWeather {...{ weather, dataCity, forecast} } />
      <ForecastList { ...{ forecast } }/>
    </>
  );
};

export default WeatherDisplay;
