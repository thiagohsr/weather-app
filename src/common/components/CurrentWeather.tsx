import {
  Description,
  CityName,
  Temperature,
} from "@styles/sharedStyles";

const CurrentWeather = (props: any) => {
  const {
    weather,
    dataCity,
    forecast,
  } = props;

  if(!weather || !dataCity || !forecast ||
    !Object.entries(weather).length ||
    !Object.entries(dataCity).length ||
    !Object.entries(forecast).length
  ) {
    return null;
  }

  return (
    <>
    <CityName>{ weather?.name || dataCity?.name }, { weather?.sys?.country || dataCity?.country }</CityName>
    <Temperature>{ Math.round(forecast.current?.temp) }°C</Temperature>
    <Description>
      Feels like { Math.round(forecast.current.feels_like) }°C.
      <span style={{ textTransform: 'capitalize' }}> { forecast?.current?.weather[0].description }</span>.
    </Description>
    </>
  )

}

export default CurrentWeather;