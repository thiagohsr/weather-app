import { useAppDispatch, useAppSelector } from "@common/hooks/store-hook";
import { removeCity } from "@features/favouriteCitiesList/favouriteCitiesListSlice";
import { CoordinatesLabel, DefaultList, DeleteButton, ListItem } from "@styles/sharedStyles";

const FavouriteCitiesList = () => {
  const { cities } = useAppSelector((state) => state.citiesList);
  const dispatch = useAppDispatch();
  console.log("FavouriteCitiesList::store::called ", Object.entries(cities));

  const handleRemoveCity = (cityKey: string) => () => {
    dispatch(removeCity({ cityKey }));
  };

  return (
    <>
      {Object.entries(cities).length ? (
        <DefaultList>
          {Object.entries(cities)?.map((city: any[]) => {
            const [key, cityData] = city;
            console.log("City::called ", city);

            return (
              <ListItem key={key}>
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
    </>
  );
};

export default FavouriteCitiesList;
