import { useAppDispatch, useAppSelector } from "@common/hooks/store-hook";
import { DefaultList, ListItem } from "@styles/sharedStyles";

const FavouriteCitiesList = () => {
  const { cities } = useAppSelector((state) => state.citiesList);
  console.log("FavouriteCitiesList::store::called ", Object.entries(cities));

  return (
    <>
      {Object.entries(cities).length ? (
        <DefaultList>
          {Object.entries(cities)?.map((city: any[]) => {
            const [key, cityData] = city;
            console.log("City::called ", city);
            return (
              <ListItem key={key}>
                {cityData.name} | {cityData.country}
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
