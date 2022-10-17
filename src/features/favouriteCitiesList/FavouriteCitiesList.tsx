import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@common/hooks/store-hook";
import { removeCity } from "@features/favouriteCitiesList/favouriteCitiesListSlice";
import CurrentWeather from "@components/CurrentWeather";
import ForecastList from "@components/ForecastList";
import { useGetWeatherByCoordsQuery } from "@common/services/weatherSvc";
import {
  CoordinatesLabel,
  DefaultList,
  DeleteButton,
  ListItem,
} from "@styles/sharedStyles";
import { CitiesListEmptyState, FavouriteCitiesListHolder } from "./FavouriteCitiesList.style";

const FavouriteCitiesList = () => {
  const { cities } = useAppSelector((state) => state.citiesList);
  const dispatch = useAppDispatch();
  const [currentCity, setCurrentCity] = useState<any>({});
  
  const { isLoading, data } = useGetWeatherByCoordsQuery(
    {
      latitude: currentCity?.lat,
      longitude: currentCity?.lon,
    },
    { skip: !currentCity?.lat && !currentCity?.lon }
  );

  const handleRemoveCity = (cityKey: string) => (evt: any) => {
    evt.stopPropagation();
    dispatch(removeCity({ cityKey }));
  };

  const handleShowSelected = (key: string) => () => {
    setCurrentCity(cities[key]);
  }

  return (
    <>
      <FavouriteCitiesListHolder style={{ width: '100%'}}>
        {Object.entries(cities).length ? (
          <DefaultList>
            {Object.entries(cities)?.map((city: any[]) => {
              const [key, cityData] = city;
              return (
                <ListItem key={key} onClick={handleShowSelected(key)}>
                  <DeleteButton onClick={handleRemoveCity(key)}>x</DeleteButton>
                  {cityData.name} | {cityData.country}
                  <br />
                  <CoordinatesLabel>
                    {cityData.lat}, {cityData.lon}
                  </CoordinatesLabel>
                </ListItem>
              );
            })}
          </DefaultList>
        ) : (
          <CitiesListEmptyState>Do not have added cities.</CitiesListEmptyState>
        )}
      </FavouriteCitiesListHolder>
      <CurrentWeather {...{ forecast: data, dataCity: currentCity, weather: currentCity }} />
      <ForecastList {...{ forecast: data }} />
    </>
  );
};

export default FavouriteCitiesList;
