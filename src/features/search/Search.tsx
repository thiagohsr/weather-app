import { useEffect, useState } from "react";
import {
  useGetWeatherByNameQuery,
} from "common/services/weatherSvc";

import { useAppDispatch } from "@hooks/store-hook";
import { receivedWeather } from "@features/weatherDisplay/weatherDisplaySlice";
import { theme } from "@helpers/themingHelper";
import { SearchHolder, SearchInput, ListItem, SearchResultList } from "./Search.styles";


function debounce(func: { apply: (arg0: any, arg1: any[]) => void; }, timeout = 300){
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [citiesList, setCitiesList] = useState<Array<any>>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const citySearch = useGetWeatherByNameQuery(
    { searchTerm: value },
    { skip: value?.length < 4 }
  );

  useEffect(function fillCitiesList() {
    setCitiesList(citySearch?.data?.list);
  }, [citySearch?.data?.list]);

  // Todo: Refactor to store?
  useEffect(function setErrorMessageFn() {
    if (citySearch.status === 'fulfilled' && !citiesList?.length) {
      setErrorMessage('City not found. Try another one :)');
    }
  }, [citySearch.status, citiesList?.length]);

  const handleResetList = () => () => {
    setErrorMessage('')
    setCitiesList([]);
  }

  const handleOnSelect = (item: any) => () => {
    dispatch(receivedWeather(item));
    handleResetList()();
  };

  const processChangeValue = debounce((inputValue: any) => { 
    citySearch?.data?.list?.length && setCitiesList(citySearch?.data?.list);
    setValue(inputValue.target.value)
  });

  const Svg = (p: JSX.IntrinsicElements['svg']) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      role="presentation"
      {...p}
    />
  );

  const DropdownIndicator = () => (
    <div style={{
        color: theme.colors.primary,
        height: 24,
        width: 32,
        position: "absolute",
        right: 20,
        top: 25,
      }}>
      <Svg>
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </Svg>
    </div>
  );

  return (
    <>
      <SearchHolder onMouseLeave={handleResetList}>
        <DropdownIndicator />
        <SearchInput onChange={processChangeValue} onKeyDown={processChangeValue} />
        <SearchResultList>
          {citiesList?.length ? citiesList.map((item:any, index: number | undefined) => {
            return item.name && (
              <ListItem onClick={handleOnSelect(item)} key={item.id} tabIndex={index}>
                {item.name} | {item.sys.country}
                {/* { JSON.stringify(item) } */}
              </ListItem>
            )
          }) : null}
        </SearchResultList>
      </SearchHolder>
      {
        citySearch.status === 'fulfilled' &&
        !citySearch?.data?.list?.length &&
        <><span>{ errorMessage }</span></>
      }
    </>
  );
};

export default Search;
