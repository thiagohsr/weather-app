import type { NextPage } from 'next'

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '@styles/sharedStyles';

const About: NextPage = () => {
  return(
    <Container>
      <Main>
        <Title>
          Just one more page to test!
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>
      </Main>
    </Container>
  )
}

export default About;