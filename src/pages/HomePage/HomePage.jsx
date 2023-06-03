import React from 'react'
import { Container } from 'shared/components/Container/Container.styled'
import { HomePageSheet } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <HomePageSheet>
        <h1 className='home-title'>Glad to see you here :)</h1>
      </HomePageSheet>
    </Container>
  );
}

export default HomePage