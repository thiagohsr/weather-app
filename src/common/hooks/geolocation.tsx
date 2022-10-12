import { useEffect, useState } from 'react';

export type coordinatesType = {
  coords: GeolocationCoordinates,
  timestamp: EpochTimeStamp,
}

const initialState: coordinatesType = {
  coords: {
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 0, // 38.7167
    longitude: 0, // -9.1333
    speed: null
  },
  timestamp: new Date().getTime(),
}

function GeolocationCoordinates (): GeolocationPosition | null {
  
  const [coordinates, setCoordinates] = useState<GeolocationPosition>(initialState);
  useEffect(() => {
    if (process.browser && 'geolocation' in navigator) {
      const fetchGeolocation = async () => {
        await navigator?.geolocation?.getCurrentPosition(
          (success) => {
            setCoordinates(success);
          },
          (error) => {
            if (error.code == error.PERMISSION_DENIED)
              console.log("Access for geolocation is needed :)");
          });
      }
      fetchGeolocation();
      if (!coordinates) {
        fetchGeolocation().catch(console.error);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    latitude,
    longitude
  } = coordinates?.coords;

  if (!latitude && !longitude) {
    return null;
  }

  return coordinates;
};

export default GeolocationCoordinates;
