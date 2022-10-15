import { useEffect } from "react";
import {
  useGetWeatherByCoordsQuery,
  useGetCityNameByCoordsQuery,
} from "@services/weatherSvc";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedForecast } from "./weatherDisplaySlice";
import GeolocationCoordinates from "@hooks/geolocation";

import Grid from "styled-components-grid";
import {
  Description,
  CityName,
  Temperature,
  ForecastHolder,
} from "@styles/sharedStyles";
import IconLoaderStyled from "@common/components/WeatherIconLoader";

const WeatherDisplay = () => {
  const dispatch = useAppDispatch();
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

  const { isLoading: isLoadingCity, data: dataCity } = useGetCityNameByCoordsQuery({
    latitude,
    longitude
  }, { skip: !latitude && !longitude });

  if (isLoading || (!forecast?.current)) {
    return <>Weather is Loading!</>;
  }

  return (
    <>
      {/* <div>From RTKQuery? {JSON.stringify(data, null, 2)}</div> */}
      {/* <CityName>{ weather?.name }, { weather?.sys?.country }</CityName>
      <Temperature>{ Math.round(weather?.main?.temp) }°C</Temperature>
      <Description>Feels like { Math.round(weather?.main?.feels_like) }°C. <span style={{ textTransform: 'capitalize' }}>{ weather?.weather[0]?.description }</span>.</Description> */}
      <CityName>{ weather?.name || dataCity?.name }, { weather?.sys?.country || dataCity?.country }</CityName>
      <Temperature>{ Math.round(forecast.current?.temp) }°C</Temperature>
      <Description>
        Feels like { Math.round(forecast.current.feels_like) }°C.
        <span style={{ textTransform: 'capitalize' }}> { forecast?.current?.weather[0].description }</span>.
      </Description>
      <ForecastHolder style={{ width: "100%" }}>
        <h3>8-day forecast</h3>
        {forecast.daily.map((item: any) => {
          const forecastDay = new Date(item.dt * 1000).toDateString()

          return (
            <div key={item?.dt}>
              <Grid style={{ marginBottom: 15, paddingBottom: 10, borderBottom: '1px solid #a8a8a8' }}>
                <Grid.Unit size={{ mobile: 2 / 8, tablet: 2 / 8, desktop: 3 / 8}}>
                  { forecastDay.substring(forecastDay.length - 4, 0) }
                </Grid.Unit>
                <Grid.Unit size={{ mobile: 3 / 8, tablet: 2 / 8, desktop: 2 / 8 }} style={{ position: "relative" }}>
                  <IconLoaderStyled src={`/images/${item.weather[0]?.icon}@2x.png`} />{ Math.round(item?.temp.max) }/{ Math.round(item?.temp.min) }°C
                </Grid.Unit>
                <Grid.Unit size={{ mobile: 3 / 8, tablet: 2 / 8, desktop: 3 / 8 }}>{
                  item.weather[0]?.description
                }</Grid.Unit>
              </Grid>
              {/* {JSON.stringify(item, null, 2)} */}
            </div>
          )
        })}
      </ForecastHolder>
      {/* <div>Fforecast RTKQuery? {JSON.stringify(forecast.daily[0], null, 2)}</div> */}
      
      {/* <div>City From RTKQuery? {JSON.stringify(dataCity, null, 2)}</div> */}
    </>
  );
};

export default WeatherDisplay;
