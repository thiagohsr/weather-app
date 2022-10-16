import type { NextPage } from "next";
import Link from 'next/link';

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@styles/sharedStyles";

import WeatherDisplay from "@features/weatherDisplay/WeatherDisplay";
import Search from "@features/search/Search";

const Home: NextPage = () => {
  

  return (
    <Container>
      <Main>
        <Title>Weather app</Title>
        <Link href={'/citiesList'}>Favourited cities</Link>
        <Search />
        <WeatherDisplay />
      </Main>
    </Container>
  );
};

export default Home;
