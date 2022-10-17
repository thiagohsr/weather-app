// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //TODO: declare types
) {
  const { query } = req;

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
