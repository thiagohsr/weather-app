import styled from "styled-components";

const WeatherDisplayHolder = styled.div`
  width: 100%;
  position: relative;
`;

const AddToListButton = styled("button")<HTMLButtonElement | any>`
  background-color: ${props => props?.alreadyInList ? '#009456' : '#fff'};
  border: none;
  color: ${props => props?.alreadyInList ? '#fff' : '#000'};
  position: absolute;
  right: 0;
  bottom: -4.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  &::before {
    content: ${props => props?.alreadyInList ? '"\\2713"' : '"\\002B"'};
    font-weight: bold;
    border: ${props => props?.alreadyInList ? 'none' : '2px solid black'};
    padding: 2px 7px;
    border-radius: 50%;
    font-size: 2rem;
    margin-right: 1.5rem;
  }
`;

export {
  WeatherDisplayHolder,
  AddToListButton,
};