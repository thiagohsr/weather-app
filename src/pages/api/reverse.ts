// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { cityWeatherType } from 'common/types/weather'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { query } = req;
  await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${query?.lat}&lon=${query?.lon}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.error('Reverse API fail with');
  }).then(responseJson => {
    res.status(200).json(responseJson);
  }).catch(error => {
    throw new Error(`Reverse API fail with: ${error.message}`);
  });
  // console.log(req, 'Reverse::enpoint', res)
  // res.status(200).json([{
  //   "name": "Coimbra",
  //   "lat": 40.2111931,
  //   "lon": -8.4294632,
  //   "country": "PT"
  // }])
}
