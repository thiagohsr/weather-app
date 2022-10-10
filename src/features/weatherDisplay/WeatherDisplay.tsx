import { useGetWeatherByCoordsQuery, useGetCityNameByCoordsQuery } from "common/services/weatherSvc";
import GeolocationCoordinates from '@hooks/geolocation';

const WeatherDisplay = () => {
  const coordinates = GeolocationCoordinates();
  const latitude = coordinates?.coords?.latitude;
  const longitude = coordinates?.coords?.longitude;
  const { isLoading, data } = useGetWeatherByCoordsQuery(null);

  const { isLoading: isLoadingCity, data: dataCity } = useGetCityNameByCoordsQuery({
    latitude,
    longitude
  }, { skip: !latitude && !longitude });
  
  if (isLoading || isLoadingCity || !dataCity) {
    return <>Weather is Loading!</>
  }

  return (
    <>
      {/* <div>From RTKQuery? {JSON.stringify(data, null, 2)}</div> */}
      <div>City From RTKQuery? {JSON.stringify(dataCity, null, 2)}</div>
    </>
  )
};

export default WeatherDisplay;
