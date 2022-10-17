import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  max-width: 40%;
  width: 100%;
  padding: 5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 60%;
  }

  @media (max-width: 768px) {
    max-width: 60%;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }

  @media (max-width: 375px) {
    max-width: 100%;
  }
`

const Title = styled.h1`
  margin: 2.5rem 0;
  line-height: 1.15;
  font-size: 3.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

const CityName = styled.h1`
  margin: 1.5rem 0 0;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: none;
`

const Temperature = styled.h2`
  margin: 1.5rem 0 0;
  line-height: 1.15;
  font-size: 6.2rem;
  text-align: center;
  text-decoration: none;
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

const ForecastHolder = styled.div`
  width: 100%;
`;


const DefaultList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
  list-style: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 10px 15px -3px, rgb(0 0 0 / 10%) 0px 4px 6px -4px;
`;

const DeleteButton = styled.button`
  float: right;
  background: #990000;
  border-radius: .2rem;
  border: none;
  color: #fff;
  font-weight: bold;
  margin-top: 1rem;
  padding-bottom: .2rem;
  cursor: pointer
`

const ListItem = styled("li")<HTMLLIElement | any>`
  background-color: ${props => props?.isSelected ? 'rgb(237 240 205)' : 'rgb(255 255 255)'};
  color: rgb(0 0 0);
  padding: 5px 15px;
  border-bottom: 1px solid #a8a8a8;
  cursor: pointer;
  &:last-child {
    border-radius: 5px;
  }
`;

const CoordinatesLabel = styled.span`
  font-size: 1.2rem; 
  color: #848181;
`;

const NavBar = styled.nav`
  width: 100%;
  background-color: #eee;
  border-radius: .5rem;
  padding: 1.5rem;
  & a {
    margin-right: 1.5rem;
  }
`;

export {
  CityName,
  CodeTag,
  Container,
  CoordinatesLabel,
  DefaultList,
  DeleteButton,
  Description,
  ListItem,
  ForecastHolder,
  Main,
  NavBar,
  Temperature,
  Title,
}