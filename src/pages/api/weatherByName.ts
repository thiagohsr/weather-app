// https://openweathermap.org/data/2.5/find?q=lisbon&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { cityWeatherType } from 'common/types/weather'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query } = req;
  console.error('WeatherByName API with: ', req.query);

  // Mocked call
  // res.status(200).json({
  //   "message": "accurate",
  //   "cod": "200",
  //   "count": 5,
  //   "list": [
  //     { "id": 2267057, "label": "Lisbon | Dif", "name": "Lisbon", "coord": { "lat": 38.7167, "lon": -9.1333 }, "main": { "temp": 18.96, "feels_like": 18.79, "temp_min": 18.13, "temp_max": 19.41, "pressure": 1025, "humidity": 72 }, "dt": 1665688174, "wind": { "speed": 9.26, "deg": 360 }, "sys": { "country": "PT" }, "rain": null, "snow": null, "clouds": { "all": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }] }, { "id": 4969622, "label": "Lisbon | Dif", "name": "Lisbon", "coord": { "lat": 44.0315, "lon": -70.1045 }, "main": { "temp": 15.73, "feels_like": 15.42, "temp_min": 14.64, "temp_max": 17.03, "pressure": 1017, "humidity": 79 }, "dt": 1665688210, "wind": { "speed": 5.14, "deg": 160 }, "sys": { "country": "US" }, "rain": null, "snow": null, "clouds": { "all": 100 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }] }, { "id": 4837798, "label": "Lisbon | Dif", "name": "Lisbon", "coord": { "lat": 41.604, "lon": -72.0117 }, "main": { "temp": 18.11, "feels_like": 18.43, "temp_min": 16.61, "temp_max": 20.32, "pressure": 1013, "humidity": 94, "sea_level": 1013, "grnd_level": 1004 }, "dt": 1665688210, "wind": { "speed": 5.87, "deg": 155 }, "sys": { "country": "US" }, "rain": null, "snow": null, "clouds": { "all": 100 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }] }, { "id": 4516749, "label": "Lisbon | Dif", "name": "Lisbon", "coord": { "lat": 39.8609, "lon": -83.6352 }, "main": { "temp": 15.09, "feels_like": 13.49, "temp_min": 13.74, "temp_max": 16.42, "pressure": 1007, "humidity": 32 }, "dt": 1665688209, "wind": { "speed": 8.75, "deg": 250 }, "sys": { "country": "US" }, "rain": null, "snow": null, "clouds": { "all": 40 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d" }] }, { "id": 5160951, "label": "Lisbon | Dif", "name": "Lisbon", "coord": { "lat": 40.772, "lon": -80.7681 }, "main": { "temp": 14.19, "feels_like": 13.1, "temp_min": 13.13, "temp_max": 14.88, "pressure": 1007, "humidity": 55, "sea_level": 1007, "grnd_level": 973 }, "dt": 1665688210, "wind": { "speed": 5.31, "deg": 243 }, "sys": { "country": "US" }, "rain": null, "snow": null, "clouds": { "all": 100 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }] }] });

  await fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${query.searchTerm}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.error('Forecast API fail with', response);
  }).then(responseJson => {
    res.status(200).json(responseJson);
  }).catch(error => {
    throw new Error(`Forecast API fail with: ${error.message}`);
  });
}