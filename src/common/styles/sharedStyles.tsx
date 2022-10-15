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
  padding: 5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 1024px) {
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

const Temperature = styled.h1`
  margin: 1.5rem 0 0;
  line-height: 1.15;
  font-size: 3.6rem;
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

export { CityName, Container, ForecastHolder, Main, Description, CodeTag, Temperature, Title }