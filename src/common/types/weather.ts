export type cityType = {
  city: {
  id: number,
  name: string,
  coord: coordinateType,
  country: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
  }
}

export type weatherType = {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  clouds: {
    all: number
  },
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  visibility: number,
  pop: number,
  rain?: {
    '3h': number
  },
  sys: {
    pod: string
  },
  dt_txt: string
}

export type coordinateType = {
  lat: string
  lon: string
}

export type cityWeatherType = {
    cod: string
    message: number
    cnt: number
    list: weatherType[]
    city: cityType | {}
}

export type cityWeatherDailyType = {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    weather: [
      {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
      }
    ]
  },
  daily: [
    {
      dt: number,
      sunrise: number,
      sunset: number,
      moonrise: number,
      moonset: number,
      moon_phase: number,
      temp: {
        day: number,
        min: number,
        max: number,
        night: number,
        eve: number,
        morn: number
      },
      feels_like: {
        day: number,
        night: number,
        eve: number,
        morn: number
      },
      pressure: number,
      humidity: number,
      dew_point: number,
      wind_speed: number,
      wind_deg: number,
      wind_gust: number,
      weather: [
        {
          id: number,
          main: string,
          description: string,
          icon: string
        }
      ],
      clouds: number,
      pop: number,
      rain: number,
      uvi: number
    }
  ]
}