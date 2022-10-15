import styled from 'styled-components';

const SearchHolder = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border: 1px solid transparent;
  &:hover {
    background: #f5f5f5;
    border: 1px dashed #a8a8a8;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #a8a8a8;
  border-radius: 5px;
  padding: 10px;
  padding-right: 35px;
  width: 100%;
`;

const SearchResultList = styled.ul`
  margin: 0;
  padding: 0;
  borderRadius: 5px;
  overflow: hidden;
  list-style: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 10px 15px -3px, rgb(0 0 0 / 10%) 0px 4px 6px -4px;
`;

const ListItem = styled.li`
  border-radius: 5px;
  background-color: rgb(255 255 255);
  color: rgb(0 0 0);
  padding: 5px 15px;
  border-bottom: 1px solid #a8a8a8;
  cursor: pointer;
`;

export {
  ListItem,
  SearchInput,
  SearchHolder,
  SearchResultList
}