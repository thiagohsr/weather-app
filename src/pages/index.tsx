import type { NextPage } from "next";
import Head from "next/head";

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "@styles/sharedStyles";

import WeatherDisplay from "@features/weatherDisplay/WeatherDisplay";
import styled from "styled-components";
import tw from "twin.macro";
import ReactSearchBox from "react-search-box";

const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 0.25rem 1rem
  border: 1px solid black;
`;

const StyledButtonTWS = tw.button`
  background: bg-red-500
  hover: bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Title>Tammana Weather app</Title>
        <StyledButton onClick={() => console.log("Red button clicked!")}>
          Test button red
        </StyledButton>
        <br />
        <br />
        <StyledButtonTWS onClick={() => console.log("TW button clicked!")}>
          Tailwind CSS
        </StyledButtonTWS>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>
        <WeatherDisplay />
      </Main>
    </Container>
  );
};

export default Home;
