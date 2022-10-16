import type { NextPage } from 'next'
import Link from 'next/link';
import FavouriteCitiesList from '@features/favouriteCitiesList/FavouriteCitiesList';
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '@styles/sharedStyles';

const CitiesList: NextPage = () => {
  return(
    <Container>
      <Main>
        <Title>
          Favourite Cities List
        </Title>
        <Link href={'/'}>Navigate to home</Link>

        <FavouriteCitiesList />
      </Main>
    </Container>
  )
}

export default CitiesList;