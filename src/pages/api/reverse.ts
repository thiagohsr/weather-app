// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { cityWeatherType } from 'common/types/weather'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([{
    "name": "Coimbra",
    "local_names": { 
      "he": "קוימברה",
      "uk": "Коїмбра",
      "sr": "Коимбра",
      "lt": "Koimbra",
      "ru": "Коимбра",
      "ar": "قلمرية",
      "es": "Coímbra",
      "fr": "Coïmbre",
      "pt": "Coimbra",
      "ascii": "Coimbra",
      "feature_name": "Coimbra",
      "el": "Κοΐμπρα",
      "hu": "Coimbra"
    },
    "lat": 40.2111931,
    "lon": -8.4294632,
    "country": "PT"
  }])
}
