import type { NextPage } from "next";

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
        {/* <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description> */}
        <Search />
        <WeatherDisplay />
      </Main>
    </Container>
  );
};

export default Home;
