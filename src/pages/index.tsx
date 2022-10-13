import type { NextPage } from "next";
import Head from "next/head";

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@styles/sharedStyles";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

import WeatherDisplay from "@features/weatherDisplay/WeatherDisplay";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const Home: NextPage = () => {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: any) => {
    return <span>{ item.name }</span>;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <Container>
      <Main>
        <Title>Tammana Weather app</Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>
        <div style={{ width: '100%' }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
        </div>
        <WeatherDisplay />
      </Main>
    </Container>
  );
};

export default Home;
