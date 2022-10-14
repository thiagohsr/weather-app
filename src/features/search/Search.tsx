import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import {
  useGetWeatherByNameQuery,
} from "common/services/weatherSvc";
import useDebounce from "@hooks/debounce-hook";
import { useAppSelector, useAppDispatch } from "@hooks/store-hook";
import { receivedWeather } from "@features/weatherDisplay/weatherDisplaySlice";
import { theme } from "@helpers/themingHelper";

const AsyncSelect = dynamic(() => import("react-select/async"), {
  ssr: false,
});

const Search = () => {
  const dispatch = useAppDispatch();
  const { weather } = useAppSelector((state) => state.weather);
  const [value, setValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [itemsList, setItemsList] = useState([]);
  const debouncedValue = useDebounce<string>(value, 150);
  const citySearch = useGetWeatherByNameQuery(
    { searchTerm: value },
    { skip: value?.length < 4 }
  );

  useEffect(() => {
    setItemsList(citySearch?.data?.list);
  }, [citySearch?.data?.list]);

  // const handleOnSearch = (value: string) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   setValue(value);
  //   console.log(citySearch?.data?.list, "handleOnSearch::called ");
  //   return value;
  // };

  const handleOnSelect = (item: any) => {
    setSelectedValue(item);
    dispatch(receivedWeather(item));
  };

  const filterCities = useCallback((inputValue: any) => {
    console.log(itemsList, "filterCities::called ", inputValue);
    const parsedList = citySearch?.data?.list?.map((item:any) => ({
      ...item,
      label: `${item?.name} | ${item?.sys?.country}`
    }))    
    .filter((item: any) => {
      return item?.name.toLowerCase().includes(inputValue?.toLowerCase());
    });
    console.log('parsedList: ', parsedList);
    return parsedList;
  }, [citySearch?.data?.list, itemsList]);
  
  
  const promiseOptions = (inputValue: string) => {
    console.log('promiseOptions::called ', value, inputValue, debouncedValue);
    setValue(inputValue);
    return new Promise<any>((resolve) => {
      setTimeout(() => {
        resolve(filterCities(inputValue));
      }, 1500);
    });
  };

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
    <div style={{ color: theme.colors.primary, height: 24, width: 32 }}>
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
      <AsyncSelect
        closeMenuOnSelect={true}
        placeholder="Search your place..."
        controlShouldRenderValue={false}
        cacheOptions
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        defaultOptions={false}
        onChange={handleOnSelect}
        loadOptions={promiseOptions}
      />
      {/* <div>{JSON.stringify(weather)}</div> */}
    </>
  );
};

export default Search;
