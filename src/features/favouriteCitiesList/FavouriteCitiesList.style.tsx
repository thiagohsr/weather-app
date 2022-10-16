import styled from "styled-components";

const FavouriteCitiesListHolder = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  max-height: 15rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
`;

export default FavouriteCitiesListHolder;