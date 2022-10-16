import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@common/hooks/store-hook";
import { removeCity } from "@features/favouriteCitiesList/favouriteCitiesListSlice";
import {
  CoordinatesLabel,
  DefaultList,
  DeleteButton,
  ListItem,
} from "@styles/sharedStyles";
import CurrentWeather from "@components/CurrentWeather";
import ForecastList from "@components/ForecastList";

const FavouriteCitiesList = () => {
  const { cities } = useAppSelector((state) => state.citiesList);
  const dispatch = useAppDispatch();
  const [currentCity, setCurrentCity] = useState({});
  console.log("FavouriteCitiesList::store::called ", Object.entries(cities));

  useEffect(() => {
    console.log('currentCity::Effect', currentCity);
  }, [
    currentCity
  ])
  const handleRemoveCity = (cityKey: string) => () => {
    dispatch(removeCity({ cityKey }));
  };

  const handleShowSelected = (key: string) => () => {
    console.log('handleShowSelected::key:', cities[key])
    setCurrentCity(cities[key]);
  }

  return (
    <>
      <div style={{ width: '100%'}}>
        {Object.entries(cities).length ? (
          <DefaultList>
            {Object.entries(cities)?.map((city: any[]) => {
              const [key, cityData] = city;
              // console.log("City::called ", city);

              return (
                <ListItem key={key} onClick={handleShowSelected(key)}>
                  <DeleteButton onClick={handleRemoveCity(key)}>x</DeleteButton>
                  {cityData.name} | {cityData.country} | {cityData.state}
                  <br />
                  <CoordinatesLabel>
                    {cityData.lat}, {cityData.lon}
                  </CoordinatesLabel>
                </ListItem>
              );
            })}
          </DefaultList>
        ) : (
          <div>Do not have added cities.</div>
        )}
      </div>
      <CurrentWeather />
      <ForecastList />
    </>
  );
};

export default FavouriteCitiesList;
