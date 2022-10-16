import type { NextPage } from "next";
import {
  Container,
  Main,
  Title,
} from "@styles/sharedStyles";
import Navigation from '@components/Navigation';


import WeatherDisplay from "@features/weatherDisplay/WeatherDisplay";
import Search from "@features/search/Search";

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <Title>Weather app</Title>
        <Navigation />
        <Search />
        <WeatherDisplay />
      </Main>
    </Container>
  );
};

export default Home;
