import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  useGetWeatherByNameQuery,
  useLazyGetWeatherByNameQuery,
} from "common/services/weatherSvc";
import useDebounce from "@hooks/debounce-hook";

const AsyncSelect = dynamic(() => import("react-select/async"), {
  ssr: false,
});

const Search = () => {
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
  }, [citySearch?.data?.list.length]);

  const handleOnSearch = (value: string) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setValue(value);
    console.log(citySearch?.data?.list, "handleOnSearch::called ");
    return value;
  };

  const handleOnSelect = (item: any) => {
    console.log("handleOnSelect::called ", item);
    setSelectedValue(item);
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
  
  

  console.log(value, "citySearch::called ");
  return (
    <>
      <AsyncSelect
        closeMenuOnSelect={true}
        // cacheOptions
        // defaultOptions
        onChange={handleOnSelect}
        loadOptions={promiseOptions}
        // onInputChange={handleOnSearch}
      />
      <div>{JSON.stringify(selectedValue)}</div>
    </>
  );
};

export default Search;
