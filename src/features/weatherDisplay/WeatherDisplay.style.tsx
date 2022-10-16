import { ButtonHTMLAttributes } from "react";
import styled, { StyledComponentInnerAttrs } from "styled-components";

const WeatherDisplayHolder = styled.div`
  width: 100%;
  position: relative;
`;

const AddToListButton = styled("button")<HTMLButtonElement | any>`
  background-color: ${props => props?.alreadyInList ? '#009456' : '#fff'};
  border: none;
  color: ${props => props?.alreadyInList ? '#fff' : '#000'};
  position: absolute;
  right: 5rem;
  top: 7.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  &::before {
    content: ${props => props?.alreadyInList ? '"\\2713"' : '"\\002B"'};
  }
`;

export {
  WeatherDisplayHolder,
  AddToListButton,
};