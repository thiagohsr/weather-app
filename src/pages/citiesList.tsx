import type { NextPage } from 'next'
import FavouriteCitiesList from '@features/favouriteCitiesList/FavouriteCitiesList';
import {
  Container,
  Main,
  Title,
} from '@styles/sharedStyles';
import Navigation from '@components/Navigation';

const CitiesList: NextPage = () => {
  return(
    <Container>
      <Main>
        <Title>
          Favourite Cities List
        </Title>
        <Navigation />
        <FavouriteCitiesList />
      </Main>
    </Container>
  )
}

export default CitiesList;