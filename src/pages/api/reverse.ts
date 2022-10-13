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
  ).then(async response => {
    if (response.ok) {
      const resp = await response.json()
      return resp;
    }
  }).then(responseJson => {
    if (!responseJson?.length) {
      res.status(400).json(`Place with these coordinates not found.`);
    }
    res.status(200).json(responseJson);
  }).catch(error => {
    throw new Error(`Reverse API fail with: ${error.message}`);
  });
}
